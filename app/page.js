import Image from "next/image";

export default function Home() {
  return (

    <>
      <div style={{ position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: -1, backgroundImage: "url('/2445961.png')", backgroundRepeat: "repeat", backgroundAttachment: "fixed", opacity: 0.07, backgroundSize: "5%" }}></div>
      <header className="relative">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl "><strong>Representaciones Sociales de la Calidad de Vida en Adultos Mayores</strong></h1>
        <nav className="bg-blue-400 rounded-lg fixed z-10">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 mr-4 space-x-8 text-xl">
                <li>
                  <a href="#inicio" className="text-white hover:underline">Inicio</a>
                </li>
                <li>
                  <a href="#obj" className="text-white hover:underline">Objetivo y antecedentes</a>
                </li>
                <li>
                  <a href="#entrevista" className="text-white hover:underline">Entrevista</a>
                </li>
                <li>
                  <a href="#multimedia" className="text-white hover:underline">Multimedia</a>
                </li>
                <li>
                  <a href="#coment" className="text-white hover:underline">Comentarios</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


      <section id='inicio' className='scroll-mt-[100rem] mt-20'>
        <h2 className="text-2xl font-bold">Representaciones Sociales: </h2>
        <p>
          Las representaciones sociales son las imágenes, creencias y percepciones compartidas por un
          grupo social en relación con un tema específico. En el contexto de la calidad de vida en adultos mayores,
          las representaciones sociales se refieren a cómo la sociedad en general y los propios adultos mayores perciben y
          entienden lo que significa tener una buena calidad de vida en la tercera edad. Esto puede incluir nociones sobre
          la salud, el bienestar emocional, la independencia y la satisfacción personal.
        </p>

        <h2 className="text-2xl font-bold">Calidad de Vida: </h2>
        <p>La calidad de vida se refiere a la percepción global de bienestar y satisfacción con la vida en función
          de varios aspectos. En el contexto de los adultos mayores, la calidad de vida implica evaluar factores como
          la salud física y mental, la satisfacción personal, la participación social, el acceso a servicios de atención
          médica, la independencia y la capacidad para llevar a cabo actividades cotidianas de manera autónoma.
        </p>

        <h2 className="text-2xl font-bold">Adultos Mayores con Diabetes: </h2>

        <p>Los adultos mayores con diabetes son una población en crecimiento que enfrenta desafíos únicos en su salud
          y calidad de vida. La diabetes es una enfermedad crónica que afecta la forma en que el cuerpo utiliza la glucosa,
          y su manejo se vuelve aún más crucial a medida que las personas envejecen. Esta población específica de adultos
          mayores a menudo se caracteriza por una mayor susceptibilidad a la diabetes tipo 2, que generalmente está relacionada
          con factores de estilo de vida y genética. Para los adultos mayores con diabetes, la gestión de la enfermedad implica
          controlar los niveles de azúcar en sangre, seguir una dieta equilibrada, mantenerse físicamente activos y tomar
          medicamentos según las indicaciones médicas. Además de los desafíos médicos, estos individuos pueden experimentar
          complicaciones relacionadas con la diabetes, como problemas cardiovasculares, neuropatía, retinopatía y dificultades en
          la cicatrización de heridas. La atención y el apoyo adecuados son esenciales para mejorar la calidad de vida de los
          adultos mayores con diabetes. Esto incluye educación sobre la enfermedad, acceso a atención médica regular, seguimiento
          de la dieta y el ejercicio, así como la gestión de posibles efectos secundarios. Además, es fundamental considerar el
          aspecto emocional de vivir con una enfermedad crónica, ya que la diabetes puede generar estrés y ansiedad. El enfoque en
          la atención a adultos mayores con diabetes busca no solo controlar la enfermedad, sino también garantizar que mantengan
          una buena calidad de vida a medida que envejecen. Comprender sus necesidades y brindar un entorno de apoyo puede marcar
          la diferencia en su bienestar y felicidad en la tercera edad.
        </p>
      </section>

      <section id='obj' className='scroll-mt-[9rem] mt-20'>
        <h2 className="text-2xl font-bold">Objetivo</h2>
        <p>Conocer como la persona se identifica con la enfermedad y cómo ha logrado vivir con la misma </p>
        <h2 className="text-2xl font-bold">Antecedentes</h2>
        <p>Segun Validation of Michigan neuropathy screening instrument for diabetic peripheral neuropathy (2020)
          realizó un estudio titulado Riesgo de caídas y de sensibilidad periférica entre adultos mayores con diabetes
          en el cual su objetivo fue Determinar el riesgo de caídas, de neuropatía periférica, antecedentes de caídas y
          factores de riesgo en el hogar entre adultos mayores con diabetes Se empleó un diseño observacional, descriptivo
          de corte transversal en una población de adultos mayores con diabetes. La obtención de los datos fue realizada en
          dos fases: a) revisión de expedientes clínicos, y b ) visitas para la aplicación de un cuestionario ad hoc y de las
          pruebas estandarizadas de riesgo de caídas y sensibilidad periférica. El 88% de los participantes presentó niveles
          elevados de glucosa en ayuno, y el 85%, riesgo de neuropatía diabética. La media de caídas en el último año fue
          de 1 (± 0,7). En cuanto al riesgo de caídas con la escala Tinetti, el 3% no tuvo riesgo, el 81% tuvo riesgo y el
          16%, riesgo grave; con la escala J.H. Downton, el 2% tuvo riesgo leve, el 70%, moderado, y el 28%, grave.
          Estadísticamente se produjo una correlación positiva entre el número de caídas y la puntuación Tinetti) , la
          sensibilidad periférica (0,96) y el número de obstáculos en el hogar
        </p>
      </section>

      <section id='entrevista' className='scroll-mt-[9rem] mt-20'>
        <h2 className="text-2xl font-bold">Entrevista</h2>
        <ol className="list-decimal pl-10">
          <li>
            <h3>¿DE QUE MANERA CONSIDERAS QUE LA DIABETES HA AFECTADO TU PERSONA? </h3>
            <p>Para la mayoría de entrevistados, la diabetes les ha cambiado bastante la forma de verse a ellos mismos y al inicio les ha dado un fuerte impacto a cada uno de ellos, lo toman como algo bastante grave y de mucho impacto para ellos.
            </p>
          </li>
          <li>
            <h3>¿QUE DESAFIOS ESPECIFICOS HAS ENFRENTADO MIENTRAS VIVES CON DIABETES? </h3>
            <p>El primero de varios es enfrentar directamente y aceptar que ahora hay una enfermedad ya de base en ellos y que se necesita de algunos cambios para poder mantenerse en forma y mantener su actitud.</p>
          </li>
          <li>
            <h3>¿COMO TE HA IMPACTADO EMOCIONALMENTE LA DIABETES Y COMO HA ENCONTRADO FORMAS DE MANTENERSE ANTE LOS DESAFIOS QUE CONLLEVA SU DIABETES?</h3>
            <p>Ha influido mucho la parte de que notan cambios físicos en ellos y en que a pese a ello han tenido que buscar alternativas para seguir subsistiendo a la enfermedad, la forma en la que varios de ellos se han mantenido, es en la de buscar acompañamiento en la familia y que la misma se integre y hagan juntos el progreso de la enfermedad.</p>
          </li>
          <li>
            <h3> ¿COMO TE HA AFECTADO LA DIABETES?</h3>
            <p>A la mayoría les cambió por completo el panorama, al inicio les costó identificarse con la enfermedad, luego vieron que era una condición más y que de ellos mismos dependía como sería el desarrollo de la enfermedad.</p>
          </li>
          <li>
            <h3>¿QUÉ ESTRATEGIAS HAS UTILIZADO PARA INTEGRAR TU CONDICIÓN A LA SOCIEDAD?</h3>
            <p>Aceptar que tienen la enfermedad ha sido una de ellas, buscar cosas que los hagan sentir bien consigo mismos, aceptar que les dirán cosas buenas y malas, pero que eso no tiene que influenciar de manera negativa en la perspectiva de como ellos se ven y de la función que hacen ante la sociedad.</p>
          </li>
          <li>
            <h3>¿DE QUÉ MANERA, TUS EXPERIENCIAS CON LA DIABETES HAN INFLUIDO EN TU PERSPECTIVA SOBRE EL ENVEJECIMIENTO Y LA IMPORTANCIA DE CUIDAR TU SALUD?</h3>
            <p>Para la mayoría se centró en que el estilo de vida condiciona la salud de vida en el futuro y en el proceso innegable, que es el envejecimiento, como una parte normal del desarrollo del ser humano, por eso mismo aconsejan de cuidar la salud desde jóvenes, de cuidar su cuerpo y de tener identificación propia a ellos mismos para saber lo que está bien y lo que esta mal.
            </p>
          </li>
          <li>
            <h3>¿QUE PERSPECTIVA TE DA SER LLAMADO COMO PACIENTE DIABETICO?</h3>
            <p>Al inicio fue duro, porque estaban en el proceso de asimilar muchas cosas que venían en el “paquete” de esta enfermedad. Luego fueron asimilando que solo era un término con el que los identificaran con su enfermedad y que no precisamente condicionaría su evolución con la diabetes.</p>
          </li>
        </ol>
        <div className="flex flex-col items-center">
      <Image src="/imagen.jpeg" alt="analisis de los datos" width={700} height={700} />
    </div>
      </section>
      <section id='multimedia' className='scroll-mt-[9rem] mt-20 pl-10'>
        <h2 className="text-2xl font-bold">Multimedia:</h2>
        <h3 className="text-black text-xl">Audios</h3>
        <ul className="list-inside columns-2 space-y-4">
          <li>
            <audio controls>
              <source src="/audio1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
          <li>
            <audio controls>
              <source src="/audio2.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
          <li>
            <audio controls>
              <source src="/audio3.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
          <li>
            <audio controls>
              <source src="/audio4.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
          <li>
            <audio controls>
              <source src="/audio5.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
          <li>
            <audio controls>
              <source src="/audio6.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
          <li>
            <audio controls>
              <source src="/audio7.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
          <li>
            <audio controls>
              <source src="/audio8.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
          <li>
            <audio controls>
              <source src="/audio9.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
          <li>
            <audio controls>
              <source src="/audio10.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        </ul>
        <h3 className="text-black text-xl">Video</h3>
        <div className="flex flex-col items-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nuBUs5twNvE?si=x3mWt94p_ZITCJKv"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
        
      </section>
    </>



  )
}
