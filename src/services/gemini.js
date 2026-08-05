import { GoogleGenAI } from '@google/genai';

const getApiKey = () => {
  return import.meta.env.VITE_GEMINI_API_KEY || '';
};

export async function askConcierge(userMessage, conversationHistory = []) {
  const apiKey = getApiKey();

  if (!apiKey || apiKey.trim() === '' || apiKey.includes('tu_api_key')) {
    return {
      text: '¡Hola! Soy Don Fernando, el Concierge Virtual de Hotel Virreynal. 👋\n\nPara comunicarme contigo activamente, falta configurar tu **VITE_GEMINI_API_KEY** en Render.com o en tu archivo `.env` local.',
      isConfigured: false
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `
Eres Don Fernando, el Concierge Virtual de "Hotel Virreynal" en Córdoba, Veracruz, México (Pueblo Mágico).
Tu trato es sumamente cálido, educado, atento y refinado, propio de un hotel boutique colonial de primer nivel.

Información sobre el Hotel Virreynal:
- Ubicación: En el histórico centro de Córdoba, Veracruz, frente a la hermosa Plaza de Armas y a pasos de los icónicos Portales donde se firmaron los Tratados de Córdoba en 1821.
- Opciones de Hospedaje:
  1. Suite Virreynal ($2,450 MXN/noche): Cama King Size, balcón con vista panorámica a la catedral y centro histórico, acabados en maderas nobles.
  2. Habitación Colonial Doble ($1,850 MXN/noche): Dos camas Queen, ambiente espacioso ideal para familias o grupos.
  3. Habitación Ejecutiva ($1,450 MXN/noche): Cama Queen, escritorio de trabajo ergonómico y máxima tranquilidad.
- Servicios & Amenidades: Café gourmet cordobés de las Altas Montañas de Veracruz en cortesía, Wi-Fi de alta velocidad en todo el inmueble, estacionamiento privado, recepción 24/7 y servicio a la habitación.
- Video Corporativo Oficial: Disponible en la portada del sitio web o en YouTube (https://youtu.be/UpxqAN2ofLY).
- Tour Virtual 360°: Disponible de forma inmersiva e interactiva directamente en la sección "Tour 360°" de nuestro sitio web.
- Experiencias Locales: Recomendaciones de la ruta del café, visitas a la Ex-Hacienda de Toxpan, gastronomía típica en los Portales (pambazos cordobeses, picadas, café de olla) y recorridos por el Centro Histórico.

Instrucciones de Respuesta:
- Sé amable, breve y servicial (2 a 3 párrafos como máximo).
- Usa un español cálido con toques de cortesía virreinal.
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
