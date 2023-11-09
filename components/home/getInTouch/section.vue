<script setup>
import ImageGetInTouch from "../../../assets/img/footer/Mask group.png"
const formData = ref({
  name: '',
  phoneNumber: '',
  email: '',
  subject: '',
  prefers: '',
  detail: '',
});

let inputClass = 'w-full rounded-[8px] border border-1 border-[#D0D5DD]';
const showSuccessMessage = ref(false);

const submitForm = async (event) => {
  event.preventDefault();
  try {
    //later Simulate a POST request to an API
    const response = await axios.post('dummy/api', formData.value);

    if (response.status === 200) {
      // Form submission was successful
      showSuccessMessage.value = true;
      formData.value = '';
    }
  } catch (error) {
    console.error('Form submission error:', error);
  }
};

</script>
<template>
  <div class="3xl:px-[16.25rem] 3xl:py-[3.75px] xl:px-[10rem] lg:px-[4rem] lg:py-[2rem] px-[1rem] py-[2.75rem] ">
    <div class="bg-[#F9F9FF] lg:px-[100px] lg:py-[48px]">
      <div class="grid lg:grid-cols-2">
        <div class="mb-6">
          <img :src="ImageGetInTouch" alt="">
        </div>
        <div>
          <h1 class="text-4xl font-bold mb-4">Let’s Get in Touch</h1>
          <form @submit.prevent="submitForm">
            <div class="flex flex-col">
              <div class="flex flex-col mb-4">
                <label class="w-full">Your Name</label>
                <input :class="inputClass"
                       type="text" v-model="formData.name" placeholder="Your Name Here"/>
              </div>
              <div class="lg:flex lg:justify-between lg:space-x-4 mb-4">
                <label class="w-full">Phone
                <input :class="inputClass" type="tel" placeholder="+880"/>
                </label>
                <label class="w-full">Email
                <input :class="inputClass" v-model="formData.email" type="email" placeholder="john@example.com"/>
                </label>
              </div>
              <div class="lg:flex lg:justify-between lg:space-x-4 mb-4">
                <label class="w-full">Subject Choose
                  <select :class="inputClass" v-model="formData.subject">
                    <option>Select your subject</option>
                    <option>abc</option>
                  </select>
                </label>
                <label class="w-full">What do you prefer?
                  <select :class="inputClass" v-model="formData.prefers">
                    <option>Physical Meeting</option>
                    <option>abc</option>
                  </select>
                </label>
              </div>
              <div>
                <label>Describe Detail
                  <textarea :class="inputClass"
                            v-model="formData.detail"
                            placeholder="Writing here">

                  </textarea>
                </label>
              </div>
              <div class="flex justify-end">
                <button class="mt-4 bg-[#646BEE] text-white w-[158px] px-8 py-4 rounded-[4px]"
                        type="submit">Submit Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
