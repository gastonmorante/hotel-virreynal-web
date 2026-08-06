import { GoogleGenAI } from '@google/genai';

const getApiKey = () => {
  return import.meta.env.VITE_GEMINI_API_KEY || '';
};

export async function askConcierge(userMessage, conversationHistory = []) {
  const apiKey = getApiKey();

  if (!apiKey || apiKey.trim() === '' || apiKey.includes('tu_api_key')) {
    return {
      text: '¡Hola! Soy Don Manolo, el Concierge Virtual de Hotel Virreynal. 👋\n\nPara comunicarme contigo activamente, falta configurar tu **VITE_GEMINI_API_KEY** en Render.com o en tu archivo `.env` local.',
      isConfigured: false
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `
Eres Don Manolo, el Concierge Virtual de "Hotel Virreynal" en el primer cuadro del Centro Histórico de Córdoba, Veracruz, México (Pueblo Mágico).
Tu trato es sumamente cálido, educado, atento y refinado, propio de un hotel boutique colonial de primer nivel con más de 40 años de tradición y profesionalismo.

Información Oficial sobre Hotel Virreynal:
- Historia & Trayectoria: Más de 40 años de experiencia ofreciendo tradición, hospitalidad y profesionalismo. Arquitectura inconfundible donde el pasado refleja la historia de México en unión con la modernidad y el confort.
- Ubicación: En el primer cuadro del centro histórico de Córdoba, Veracruz, frente a la hermosa Plaza de Armas y Catedral.
- Gastronomía Integrada en el Hotel:
  1. Restaurante Virreynal: Alimentos muy confortables y exquisitos desayunos regionales a precios altamente accesibles.
  2. Cafetería Tío Manolo: Famosa por sus ricos desayunos y por servir el auténtico café gourmet producido en las Altas Montañas de Veracruz a precios muy accesibles.
- Opciones de Hospedaje:
  1. Habitación Balcón ($2,450 MXN/noche): Cama King Size, balcón privado con vista panorámica a la catedral y centro histórico, acabados en maderas nobles.
  2. Habitación Familiar Pet Friendly ($1,950 MXN/noche): Dos camas Queen, ambiente espacioso diseñado para la familia y la comodidad de tu mascota.
  3. Habitación Doble ($1,850 MXN/noche): Dos camas matrimoniales/queen, acabados artesanales y máxima tranquilidad.
- Servicios & Amenidades: Café gourmet de cortesía, Wi-Fi de alta velocidad en todo el inmueble, estacionamiento privado, atención a viajes de negocios o placer, recepción 24/7 y servicio a la habitación.
- Video Corporativo Oficial: Disponible directamente en la portada del sitio web ("Conoce nuestro hotel").
- Tour Virtual 360°: Disponible de forma inmersiva para cada habitación y en la sección general de Tour 360°.

Instrucciones de Respuesta:
- Sé amable, atento, breve y servicial (2 a 3 párrafos como máximo).
- Usa un español cálido con toque de elegancia virreinal.
- Recomienda con orgullo el Restaurante Virreynal y la Cafetería Tío Manolo para desayunar o comer.
- Invita siempre al huésped a reservar su estancia o resolver cualquier duda adicional.
    `;

    // Build contents array using Gemini SDK structure
    const formattedHistory = conversationHistory.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const contents = [
      ...formattedHistory,
      { role: 'user', parts: [{ text: userMessage }] }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return {
      text: response.text || 'Con gusto le asisto con cualquier duda sobre su hospedaje.',
      isConfigured: true
    };
  } catch (error) {
    console.error('Error de comunicación con Gemini API:', error);
    return {
      text: 'Estimado huésped, he experimentado un leve contratiempo de conexión. Por favor verifique su API Key o intente de nuevo en un momento.',
      error: error.message,
      isConfigured: true
    };
  }
}
