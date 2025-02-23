<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Definición de la Constitución Política y democracia'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      .bg-color-1.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La constitución política y la democracia son pilares esenciales en la organización de los Estados modernos, proporcionando un marco para el equilibrio entre el poder gubernamental y los derechos ciudadanos. Ambos conceptos son fundamentales para garantizar el bienestar colectivo y estructurar la convivencia social.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')


      h2(data-aos="flip-up").mb-5 Constitución política

      p(data-aos="fade-up").mb-5 La constitución política es la norma suprema que organiza y regula el funcionamiento del Estado, delimitando sus poderes y protegiendo los derechos fundamentales. Según Arévalo Reyes (2016), “la constitución es el pacto social que cristaliza las aspiraciones colectivas de una sociedad, otorgando legitimidad a las instituciones públicas y asegurando la convivencia pacífica”.

      p(data-aos="fade-up").mb-5 #[b Las funciones principales de la constitución política son:]

      .row.align-items-center.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-7

          LineaTiempoD.color-primario.large.bg-azul(data-aos="fade-left")
            p(numero="1" titulo="Establecer y organizar la estructura del gobierno") Divide las funciones entre las ramas ejecutiva, legislativa y judicial, garantizando un sistema de pesos y contrapesos. Por ejemplo, en la Constitución de Colombia de 1991, el presidente ejerce el poder ejecutivo, el Congreso el legislativo y las cortes el judicial (Trill, 2017).
            p(numero="2" titulo="Definir los derechos y deberes de los ciudadanos") Garantiza derechos fundamentales como la vida, la libertad y la igualdad, al tiempo que establece deberes como el respeto a la ley y la contribución al bien común. Aristóteles destacaba que "el buen ciudadano reconoce y respeta tanto sus derechos como sus deberes, construyendo un Estado justo".
            p(numero="3" titulo="Garantizar la supremacía de la ley") Asegura que todas las personas, incluidas las autoridades, estén sujetas al marco legal, evitando abusos de poder. Platón afirmaba que "el gobierno ideal es aquel donde la ley tiene primacía, estableciendo las reglas para el bienestar colectivo".


      .bg-color-3.p-4(data-aos="fade-left").mb-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La influencia de la constitución se manifiesta en múltiples aspectos de la vida diaria, como el derecho al voto, que permite a los ciudadanos elegir a sus representantes, y la protección de libertades esenciales, tales como la igualdad ante la ley y la libertad de expresión.


      h2(data-aos="flip-up").mb-5 Democracia

      p(data-aos="fade-up").mb-5 La democracia es un sistema político que asegura que la soberanía reside en el pueblo, permitiendo la participación ciudadana en la toma de decisiones a través de elecciones, referendos y consultas públicas. Según Valadés (2002), “la democracia necesita un marco constitucional para garantizar la igualdad ante la ley y la protección de derechos”.

      p(data-aos="fade-up").mb-5 #[b La importancia social de la democracia es:]

      .row.align-items-center.mb-5
        
        .col-lg-7

          LineaTiempoD.color-primario.large.bg-azul(data-aos="fade-left")
            div(numero="1" titulo="Participación ciudadana") 
              p - Facilita la expresión de opiniones y el poder de decisión en temas de interés común. 
              p - El derecho al voto fortalece la soberanía popular y asegura la representatividad en las decisiones políticas.
            div(numero="2" titulo="Definir los derechos y deberes de los ciudadanos") 
              p - Garantiza libertades esenciales como la libertad de expresión y el acceso a oportunidades. 
              p - Promueve la justicia social al proteger a todos los ciudadanos sin discriminación.
            div(numero="3" titulo="Intereses colectivos e individuales") 
              p - Fomenta la deliberación pública y la resolución pacífica de conflictos. 
              p - Ofrece un espacio para adaptar el sistema democrático a las necesidades y retos contemporáneos.

        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/4.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0


      h2(data-aos="flip-up").mb-5 Relación entre constitución política y democracia

      p(data-aos="fade-up").mb-4 La constitución política y la democracia trabajan en conjunto para garantizar el equilibrio entre poder y derechos ciudadanos:

      .row.align-items-stretch.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-8
          .bg-color-3.p-4.h-100(data-aos="fade-left")
            p(data-aos="fade-left").my-3 - La constitución establece las bases jurídicas: Regula la estructura del poder y protege los derechos fundamentales.
            p(data-aos="fade-left").mb-0 - La democracia asegura legitimidad: Permite que el poder sea representativo y refleje la voluntad popular, promoviendo la igualdad y la justicia. 

      p(data-aos="fade-up").mb-4 En conclusión, la constitución política y la democracia son herramientas indispensables para la organización social y el progreso colectivo. Mientras la constitución establece el marco normativo que regula el ejercicio del poder, la democracia asegura que este sea legítimo y representativo. Este equilibrio es esencial para construir sociedades justas, inclusivas y comprometidas con el bienestar de todos sus miembros.


      .row.align-items-stretch.mb-5
        .col-lg-9
          .bg-color-3.p-4.h-100(data-aos="fade-left")
            p(data-aos="fade-left").mt-lg-4 La constitución y la democracia son pilares esenciales para garantizar derechos, promover la equidad y evitar abusos de poder. Juntas, estas herramientas estructuran un modelo de convivencia que respeta la dignidad humana y asegura la participación activa en la vida pública.
        .col-lg-3
          figure
            img(src="@/assets/curso/tema2/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

      h2(data-aos="flip-up").mb-5 Protección de derechos fundamentales


      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
          p(data-aos="fade-up").mb-4 Uno de los principales roles de la constitución es garantizar derechos fundamentales inherentes a todas las personas, tales como la libertad, la igualdad y la seguridad. Estos derechos son esenciales para una convivencia pacífica y el desarrollo humano. Como señala Bueno Trill (2017), “un Estado verdaderamente justo protege y promueve los derechos de cada individuo, reconociendo su dignidad y valor intrínseco”.

          .bg-color-4.p-4(data-aos="fade-left")
            p(data-aos="fade-left").mb-0 #[b Ejemplo clave:]
            p(data-aos="fade-left").mb-0 El derecho a la libertad de expresión, consagrado en la mayoría de las constituciones democráticas, asegura que los ciudadanos puedan compartir ideas y opiniones sin temor a represalias. Este derecho fomenta el debate público, enriquece la democracia y garantiza que las decisiones reflejen una diversidad de perspectivas.

      h2(data-aos="flip-up").mb-5 Promoción de la igualdad y la justicia social

      .row.align-items-center.mb-5
        .col-lg-8
          p(data-aos="fade-up").mb-4 La constitución y la democracia trabajan juntas para reducir desigualdades y fomentar la justicia social. Mientras que la constitución prohíbe la discriminación por género, raza, religión o condición social, la democracia proporciona mecanismos para garantizar el cumplimiento de estos principios.

          .bg-color-2.p-4(data-aos="fade-left")
            p(data-aos="fade-left").mb-0 #[b Ejemplos de impacto:]
            p(data-aos="fade-left").mb-3 - #[b Acceso universal a la educación:] Reconocido en muchas constituciones como derecho fundamental, asegura que todos los ciudadanos, independientemente de su origen, puedan desarrollar sus capacidades y contribuir al progreso social.
            p(data-aos="fade-left").mb-0 - #[b Igualdad de género:] Promovida por las democracias y las constituciones modernas, ha sido clave para empoderar a las mujeres y reducir brechas históricas.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0


      h2(data-aos="flip-up").mb-5 Organización del poder político para evitar abusos

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 La constitución establece la separación de poderes como un mecanismo para prevenir su concentración en una sola entidad o individuo, implementando un sistema de pesos y contrapesos que garantiza decisiones justas y colectivas. La democracia refuerza este principio al permitir que los ciudadanos supervisen y evalúen el desempeño de sus líderes mediante elecciones, referendos y otros mecanismos de participación.

          .bg-color-3.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 #[b Separación de poderes:] Divide las funciones del Estado entre las ramas ejecutiva, legislativa y judicial, asegurando que ninguna tenga un control absoluto y que todas se fiscalicen entre sí.


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Según Arriola (1994), “la democracia y la constitución son herramientas complementarias que evitan el autoritarismo, asegurando que el poder sea ejercido en favor de los intereses colectivos”. Este diseño fomenta la transparencia, la rendición de cuentas y la confianza en las instituciones públicas.

          .bg-color-3.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En conjunto, la constitución y la democracia garantizan derechos, promueven la igualdad y regulan el ejercicio del poder político, construyendo un entorno donde se respeta la dignidad humana y donde todos tienen la oportunidad de participar activamente en la vida pública. Aunque perfectibles, estos instrumentos siguen siendo fundamentales para enfrentar los retos contemporáneos y avanzar hacia una convivencia más justa y equitativa.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/12.svg", data-aos="zoom-in")


      .bg-full-width.bg-color-1.mb-4
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-7
              h2.mb-4(data-aos="flip-up") Desafíos actuales de las constituciones y las democracias modernas
              p.mb-4(data-aos="fade-right") En el documento se examinan los desafíos actuales que enfrentan las democracias y las constituciones modernas, destacando la falta de representación auténtica, el aumento de la desigualdad social y las amenazas autoritarias. Estos retos subrayan la importancia de la participación activa y la educación cívica como herramientas esenciales para fortalecer los valores democráticos y proteger los derechos constitucionales.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Desafíos actuales que enfrentan las democracias y las constituciones modernas
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/13.png', alt='')

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.unilibre.edu.co/cartagena/pdf/investigacion/libros/derecho/CONSTITUCIONALISMO%20Y%20DEMOCRACIA.pdf" target="_blank" rel="noopener noreferrer") Mercado García, E. (2015). Constitucionalismo y Democracia en Colombia. Universidad Libre. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.senalcolombia.tv/documental/podcast-constitucion-1991-volvamos-futuro" target="_blank" rel="noopener noreferrer") Definición de la Constitución Política y democracia, su importancia social. Señal Colombia. (2021). Constitución de 1991, volvamos al futuro 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
