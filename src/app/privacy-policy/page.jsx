import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='mx-8 py-36'>
      <h1 className='text-4xl font-semibold'>Política de Privacidad</h1>
      <p className='text-sm text-gray-500'>Última actualización: 10 de noviembre 2024</p>

      <h2 className='text-2xl font-semibold mt-10'>1. Información que Recopilamos</h2>
      <p>
        Recopilamos información para mejorar nuestros servicios, incluyendo:
      </p>
      <ul className='list-disc ml-6'>
        <li>
          <strong>Información proporcionada:</strong> como tu nombre, correo
          electrónico y cualquier otra información que decidas darnos.
        </li>
        <li>
          <strong>Información automática:</strong> como tu dirección IP y datos
          sobre tu navegador.
        </li>
        <li>
          <strong>Cookies:</strong> usamos cookies para mejorar tu experiencia
          en nuestro sitio.
        </li>
      </ul>

      <h2 className='text-2xl font-semibold mt-10'>2. Uso de la Información</h2>
      <p>Usamos la información recopilada para:</p>
      <ul className='list-disc ml-6'>
        <li>Mejorar y operar nuestro sitio web.</li>
        <li>Responder a tus consultas y brindar soporte.</li>
        <li>Enviarte noticias y actualizaciones, si has dado tu consentimiento.</li>
      </ul>

      <h2 className='text-2xl font-semibold mt-10'>3. Compartir la Información</h2>
      <p>No compartimos tu información personal, excepto en estos casos:</p>
      <ul className='list-disc ml-6'>
        <li>Con proveedores de confianza que nos ayudan a operar nuestro sitio.</li>
        <li>Para cumplir con obligaciones legales.</li>
      </ul>

      <h2 className='text-2xl font-semibold mt-10'>4. Seguridad</h2>
      <p>
        Nos esforzamos por proteger tu información, pero ningún sistema es
        completamente seguro.
      </p>

      <h2 className='text-2xl font-semibold mt-10'>5. Tus Derechos</h2>
      <p>
        Puedes solicitar acceso, corrección o eliminación de tu información
        personal contactándonos al (+591) 785 57 477.
      </p>

      <h2 className='text-2xl font-semibold mt-10'>6. Cambios en la Política</h2>
      <p>
        Podemos actualizar esta política, y cualquier cambio se publicará en
        esta página con la fecha correspondiente.
      </p>

      <h2 className='text-2xl font-semibold mt-10'>7. Contacto</h2>
      <p>
        Si tienes preguntas, contáctanos en:
        <br />
        <strong>Fundación SEPA</strong>
        <br />
        (+591) 785 57 477.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
