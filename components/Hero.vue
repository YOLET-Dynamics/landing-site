<script>
export default {
  data() {
    return {
      email: "",
      isLoading: false,
    };
  },
  methods: {
    resetForm() {
      this.email = "";
      this.isLoading = false;
    },
    async submitForm() {
      this.isLoading = true;
      try {
        const response = await fetch("https://submit-form.com/P2vM5bH8i", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: this.email,
          }),
        });

        if (response.ok) {
          alert("You'll be notified when we're ready!");
          this.resetForm();
        } else {
          alert("Failed to submit form!");
          this.isLoading = false;
        }
      } catch (e) {
        alert("Error occured: ", e);
        this.resetForm();
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <div
    class="mt-28 md:mt-36 w-full flex flex-col gap-6 md:gap-10 lg:gap-12 items-center"
  >
    <div
      class="self-center text-center tracking-wide text-white text-5xl md:text-7xl lg:text-9xl font-bold"
    >
      Coming Soon
    </div>
    <div class="text-white tracking-wider text-base md:text-2xl">
      Create.<span class="text-mainYellow-500">Design</span>.Innovate
    </div>
    <form
      @submit.prevent="submitForm"
      class="w-full flex flex-col items-center gap-4"
    >
      <div
        class="md:w-6/12 mt-4 xl:mt-8 flex items-center rounded-md overflow-hidden bg-slate-900"
      >
        <input
          name="email"
          type="email"
          v-model="email"
          autocomplete="on"
          placeholder="Enter your email"
          required
          class="text-xs md:text-base bg-slate-900 text-gray-200 placeholder-gray-500 py-1 px-2 md:py-4 md:px-6 flex-1 focus:outline-none"
          :disabled="isLoading"
        />
        <button
          class="m-1 md:m-2 bg-white text-mainBlack-500 py-2 px-3 md:py-4 md:px-6 ml-2 rounded-lg text-xs md:text-base"
          type="submit"
          :disabled="isLoading"
        >
          Notify Me!
        </button>
      </div>
    </form>
    <div class="text-white text-sm md:text-lg tracking-wider">
      -_Building Legacies_-
    </div>
  </div>
</template>
