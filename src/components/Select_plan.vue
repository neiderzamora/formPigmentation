<template>
  <div
    class="mx-auto flex px-8 items-center justify-center h-screen sm:w-[44rem]"
  >
    <form>
      <div class="space-y-10">
        <div class="">
          <h2 class="text-xl sm:text-2xl font-semibold leading-7 text-sky-700">
            Especifica tu interes en el evento
          </h2>
          <p class="mt-1 text-sm sm:text-md leading-6 text-sky-900/70">
            <ExclamationTriangleIcon
              class="h-5 w-5 inline-flex text-yellow-500"
            />
            Por favor, sigue cuidadosamente las instrucciones a continuación
            para proporcionar la información necesaria de manera precisa y
            eficiente.
          </p>
        </div>
        <div class="border-b border-gray-900/10">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-full">
              <label
                for="type-document"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Elegir plan <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <select
                  id="type-document"
                  name="type-document"
                  autocomplete="tipo de documento"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:max-w-xs sm:leading-6"
                >
                  <option>Clase gratis</option>
                  <option>Formacion completa, material de practica y certificado</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <router-link
          to="/"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Atrás
        </router-link>
        <button
          type="submit"
          class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Registrarse
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ExclamationTriangleIcon } from "@heroicons/vue/24/solid";
</script>

<style scoped>
input, option, select {
  font-size: 0.8rem !important;
}</style>
