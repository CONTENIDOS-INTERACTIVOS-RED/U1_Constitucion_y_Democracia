<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Estructura ética y los derechos fundamentales'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p(data-aos="fade-right").mb-4 La ética y los derechos fundamentales son pilares esenciales para cualquier sociedad democrática. Ambos conceptos están profundamente interconectados, ya que los principios éticos inspiran la formulación y protección de derechos fundamentales, que garantizan la dignidad y el bienestar de las personas. La constitución política actúa como un instrumento que traduce estos valores éticos en normas concretas, promoviendo justicia, equidad y convivencia pacífica.

      h2(data-aos="flip-up").mb-4 Relación entre ética y derechos fundamentales

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
        span Clasificación de los derechos fundamentales


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


      h2(data-aos="flip-up").mb-4 Valores éticos fundamentales en los derechos

      p(data-aos="fade-right").mb-4 Los valores éticos fundamentales sustentan los derechos y guían las relaciones humanas en una sociedad democrática.

      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              ImagenInfografica.color-secundario
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/tema3/info1.svg', alt='', style="max-width: 820px;").mx-auto

                  .bg-color-white.box-shadow.p-3(x="42%" y="21%" numero="+")
                    h5 Dignidad humana
                    p Este principio asegura que cada persona sea tratada con respeto, independientemente de su origen o condición social.

                  .bg-color-white.box-shadow.p-3(x="27%" y="48%" numero="+")
                    h5 Justicia
                    p Una democracia sólida necesita una estructura normativa que garantice el trato equitativo y proteja a los más vulnerables. Ejemplo: el acceso a la educación gratuita reduce desigualdades sociales y económicas.

                  .bg-color-white.box-shadow.p-3(x="74%" y="48%" numero="+")
                    h5 Equidad
                    p Promueve una distribución justa de oportunidades y recursos, asegurando que todos puedan participar en el bienestar colectivo.


      h2(data-aos="flip-up").mb-4 La constitución como garante de los derechos fundamentales

      p(data-aos="fade-right").mb-4 La constitución política no solo define los derechos fundamentales, sino que también establece los mecanismos necesarios para protegerlos. Estos incluyen la división de poderes, los controles constitucionales y la participación ciudadana mediante el ejercicio de derechos políticos, como el voto. 

      .bg-color-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La interrelación entre ética, derechos fundamentales y constitución refuerza el compromiso de las sociedades democráticas con una convivencia justa y respetuosa. Este vínculo asegura que los principios éticos se transformen en derechos tangibles, promoviendo la dignidad humana y la justicia como pilares esenciales de una sociedad democrática. A través de este marco, se construye un entorno en el que la igualdad y la participación ciudadana son elementos fundamentales para el bienestar colectivo.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/2.png', alt='')


      .bg-full-width.bg-color-2.mb-4
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-7
              h2.mb-4(data-aos="flip-up") Retos en la garantía de derechos fundamentales
              p.mb-4(data-aos="fade-right") En el documento se aborda cómo las democracias enfrentan retos significativos en la garantía de los derechos fundamentales, destacando la desigualdad en su acceso, las tensiones entre la libertad individual y la seguridad colectiva, y las amenazas externas como la desinformación y los regímenes autoritarios.
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Retos en la garantía de derechos fundamentales
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/3.png', alt='')

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
                a(href="https://www.un.org/es/about-us/universal-declaration-of-human-rights" target="_blank" rel="noopener noreferrer") Declaración Universal de los Derechos Humanos (1948). Naciones Unidas. 

  
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
            texto: '¿Cuál es el origen etimológico de la palabra "democracia"?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Latín',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Griego',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Árabe',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Francés',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿En qué ciudad se originó la democracia directa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Roma',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Esparta',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Atenas',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Corinto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué significa "demos" en griego?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Poder',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Pueblo',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Gobierno',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Justicia',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué documento limita el poder del rey y establece ciertos derechos para los nobles en Inglaterra?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La Declaración de Independencia',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La Carta Magna',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La Constitución de 1991',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La Declaración de los Derechos del Hombre y del Ciudadano',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué principio establece que el poder reside en el pueblo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Soberanía popular',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Supremacía de la ley',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Justicia distributiva',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Contrapesos institucionales',
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
