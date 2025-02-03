<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Estructura ética y los derechos fundamentales'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p(data-aos="fade-right").mb-4 La ética y los derechos fundamentales son pilares esenciales para cualquier sociedad democrática. Ambos conceptos están profundamente interconectados, ya que los principios éticos inspiran la formulación y protección de derechos fundamentales, que garantizan la dignidad y el bienestar de las personas. La constitución política actúa como un instrumento que traduce estos valores éticos en normas concretas, promoviendo justicia, equidad y convivencia pacífica.

      h2(data-aos="flip-up").mb-4 Relacionales entre ética y derechos fundamentales

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg-8
          .bg-color-3.p-4.mb-4
            p(data-aos="fade-right").mb-4 La ética, entendida como el conjunto de principios que orientan el comportamiento humano hacia el bien común, proporciona el fundamento de los derechos fundamentales. Estos principios no solo definen lo justo y correcto, sino que también orientan las normas que regulan las interacciones entre los individuos y el Estado.
          
          p(data-aos="fade-right").mb-4 En una democracia, los derechos fundamentales aseguran garantías inherentes a todas las personas, como la igualdad, la libertad y el acceso a oportunidades. Estos derechos, reconocidos y protegidos por la constitución, incluyen derechos civiles, políticos y sociales que fomentan una sociedad más equitativa y participativa.

      h2(data-aos="flip-up").mb-4 Importancia de los derechos fundamentales

      p(data-aos="fade-right").mb-4 Los derechos fundamentales son la base de una sociedad justa y equitativa. Garantizan la protección de la dignidad humana al asegurar un trato respetuoso y valor a cada individuo.


      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Protección de la dignidad humana" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Protección de la dignidad humana
              p Los derechos fundamentales garantizan que todas las personas sean tratadas con respeto y valor intrínseco.
          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-1.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Convivencia social" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Convivencia social
              p Al establecer normas claras, los derechos fundamentales promueven una convivencia basada en la justicia y el respeto mutuo.

            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/tab-2.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Estabilidad democrática " :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Estabilidad democrática 
              p Los derechos fundamentales refuerzan la confianza en las instituciones y aseguran un equilibrio entre los poderes del Estado y la ciudadanía.

            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-3.png', alt='')

      p(data-aos="fade-right").mb-4 Los derechos fundamentales se clasifican en civiles, políticos y sociales, cada uno desempeñando un papel crucial en la construcción de una sociedad justa y equilibrada.

      .titulo-figura.mb-4
        h5 Tabla 1.
        span Relación entre procesos de desarrollo y sistemas de pruebas


      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th.text-center Categoría
              th.text-center Derechos principales
              th.text-center Importancia
          tbody
            tr
              td.text-center Derechos civiles
              td
                ul.mb-0
                  li Derecho a la vida
                  li Libertad individual
                  li Privacidad
              td Protegen las libertades individuales y aseguran la integridad física y moral de las personas. Por ejemplo, el derecho a la vida prohíbe la pena de muerte en muchos países y fomenta la creación de sistemas de salud que preservan la vida.
            tr
              td.text-center Derechos políticos
              td
                ul.mb-0
                  li Derecho al voto
                  li Acceso a cargos públicos
                  li Libertad de expresión y asociación
              td Permiten a los ciudadanos participar en la toma de decisiones colectivas y asegurar que sus voces sean escuchadas y respetadas, fortaleciendo los sistemas democráticos.
            tr
              td.text-center Derechos sociales
              td
                ul.mb-0
                  li Derecho a la educación
                  li Derecho a la salud
                  li Derecho al trabajo digno
              td Garantizan condiciones de vida que permiten el desarrollo integral de las personas y promueven la igualdad de oportunidades y la cohesión social.



      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
