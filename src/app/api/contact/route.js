export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validate form data
    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: 'Chybí povinné údaje.' },
        { status: 400 }
      );
    }
    
    // Ensure languages is an array
    if (formData.languages && !Array.isArray(formData.languages)) {
      formData.languages = [];
    }
    
    // Send to the mail service - Updated URL to match new backend structure
    const response = await fetch('http://localhost:8080/api/mail/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      let errorMessage = 'Chyba při odesílání zprávy.';
      
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (jsonError) {
        console.error('Error parsing error response:', jsonError);
        // Use status text if available or default message
        errorMessage = response.statusText || errorMessage;
      }
      
      return Response.json(
        { success: false, message: errorMessage },
        { status: response.status }
      );
    }
    
    return Response.json({ success: true, message: 'Zpráva byla úspěšně odeslána!' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return Response.json(
      { success: false, message: 'Něco se pokazilo. Zkuste to prosím znovu.' },
      { status: 500 }
    );
  }
} 