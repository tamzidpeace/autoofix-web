<template>
  <ContentList path="/features" v-slot="{ list }">
    <div v-for="feature in list" :key="feature._path">
      <section class="bg-[#FFF] px-1">
        <section class="py-14">
          <div class="flex justify-center">
            <p class="font-bold text-[24px]">
              {{ feature.title ?? "Our Features" }}
            </p>
          </div>
          <div class="text-center flex justify-center">
            <p class="font-400 pt-2 w-[924px]">{{ feature.descriptionTop }}</p>
          </div>
        </section>
        <section class="grid grid-cols-1 lg:grid-cols-2">
          <div class="flex justify-center lg:justify-end">
            <div class="w-12/12">
              <div class="flex justify-center lg:justify-center py-12">
                <img
                  class="lg:hidden"
                  src="~/assets/img/feature-section.png"
                  alt=""
                />
                <img
                  class="hidden lg:block px-6"
                  src="~/assets/img/feature-section-pc.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="h-full flex justify-start lg:justify-center">
            <div class="px-12 py-12">
              <div class="">
                <p class="font-bold text-[24px]">{{ feature.featureName }}</p>
              </div>
              <div class="">
                <p class="font-400 pt-2">
                  {{
                    feature.descriptionDown ??
                    "Schedule Appointment, Estimate, Inspection & Health card, Job Card, Invoice, Order Summary, Customer & Vehicle Master, and             More Schedule Appointment, Estimate, Inspection & Health card, Job Card, Invoice, Order Summary."
                  }}
                </p>
              </div>
              <div class="pt-8 lg:pt-8">
                <div class="w-full">
                  <div class="flex items-center">
                    <img src="~/assets/img/ficon1.png" alt="" />
                    <p class="font-bold text-2xl ps-4">
                      {{ feature.serviceOne ?? "Vehicle Entries .." }}
                    </p>
                  </div>
                  <p class="ps-16 pe-2">
                    {{
                      feature.descriptionOne ??
                      " Schedule Appointment, Estimate, Inspection & Health card, Job Card, Invoice, Order Summary.."
                    }}
                  </p>
                </div>
                <div class="">
                  <div class="flex items-center">
                    <img src="~/assets/img/ficone2.png" alt="" />
                    <p class="font-bold text-2xl ps-4">
                      {{ feature.serviceTwo ?? "Repairing Vehicle.." }}
                    </p>
                  </div>
                  <p class="ps-16 pe-2">
                    {{
                      feature.descriptionTwo ??
                      "Schedule Appointment, Estimate, Inspection & Health card, Job Card, Invoice, Order Summary, Customer & Vehicle Master."
                    }}
                  </p>
                </div>
                <div class="">
                  <div class="flex items-center">
                    <img src="~/assets/img/ficon3.png" alt="" />
                    <p class="font-bold text-2xl ps-4">
                      {{ feature.serviceThree ?? "Departure" }}
                    </p>
                  </div>
                  <p class="ps-16 pe-2">
                    {{
                      feature.descriptionThree ??
                      "Schedule Appointment, Estimate, Inspection & Health card,Job Card."
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </ContentList>
</template>

<script>
// reference example

// dom
// <!-- abc :  {{ ourFeature ??'avvvv' }} -->
//   <!--
// <ContentDoc path="/articles/index.md" v-slot="{ doc }">
// adasdsad + doc
// </ContentDoc> -->
//   <!-- <ContentDoc path="/content/articles/index.md" v-slot="{ doc }">
//     <article>
//       <h1>{{ doc.title }}</h1>
//       <ContentRenderer :value="doc" />
//     </article>
//   </ContentDoc> -->

//   <!-- <ContentList path="/articles" v-slot="{ list }">
//     <div v-for="article in list" :key="article._path">
//       <h2>{{ article.title }}</h2>
//       <p>{{ article.description }}</p>
//     </div>
//   </ContentList> -->

//   <!-- <ContentDoc path="/features">
//       <article>
//         <h1>{{ doc.title }}</h1>
//         <ContentRenderer :value="doc" />
//       </article>
//     </ContentDoc> -->

//   <!-- <ContentRenderer :value="data">
//     <h1>{{ data.title }}</h1>
//     <ContentRendererMarkdown :value="data" />
//   </ContentRenderer> -->

// dom
// const ourFeature =  ref({})
// Create a query looking into content/articles/nuxt3 directory
// const fetchData = async () => {
//     const contentQuery = await queryContent('articles', 'nuxt3').where({ title: 'Home' }).findOne()
//     console.log('contentQuery',contentQuery)
//     ourFeature.value = contentQuery
// }

// onMounted( () => {
//     fetchData()
// })
// const { data } = await useAsyncData("page-data", () =>
//   queryContent("/articles").findOne()
// );

// const articles = await queryContent('articles').where({ title: 'Home' }).findOne()
// console.log('articles', articles);

// const { data } = await useAsyncData('ourfeature', () => queryContent('/features').findOne())

// const contentQuery = queryContent("features", "ourfeature");
// console.log("content query: ", contentQuery);
</script>
