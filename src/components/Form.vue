<template>
  <div class="mx-auto px-10 py-8 sm:px-auto sm:py-12 sm:w-[44rem]">
    <form @submit.prevent="validateForm">
      <div class="space-y-10">
        <div class="">
          <h2 class="text-xl sm:text-2xl font-semibold leading-7 text-sky-700">
            Formulario | Curso diseño de cejas
          </h2>
          <p class="mt-1 text-sm sm:text-md leading-6 text-sky-900/70">
            <ExclamationTriangleIcon class="h-5 w-5 inline-flex text-yellow-500" /> Por favor,
            sigue cuidadosamente las instrucciones a continuación para
            proporcionar la información necesaria de manera precisa y eficiente.
          </p>
        </div>
        <div class="border-b border-gray-900/10">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Información Personal
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Digite sus datos personales.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="fullname"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Nombre completo <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  autocomplete="nombre completo"
                  v-model="formState.fullname.value"
                  @input="() => validateField('fullname', validateFullname)"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                />
              </div>
              <span
                v-if="!formState.fullname.isValid"
                class="text-red-500 text-sm mt-1"
              >
              <InformationCircleIcon class="h-5 w-5 inline-flex" /> Ingrese un nombre completo válido.
              </span>
            </div>

            <div class="sm:col-span-4">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Correo electrónico <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="correo electronico"
                  v-model="formState.email.value"
                  @input="() => validateField('email', validateEmail)"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                />
              </div>
              <span
                v-if="!formState.email.isValid"
                class="text-red-500 text-sm mt-1"
              >
              <InformationCircleIcon class="h-5 w-5 inline-flex" /> Ingrese un correo electrónico válido.
              </span>
            </div>

            <div class="sm:col-span-3">
              <label
                for="whatsapp-number"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Número de WhatsApp <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black sm:max-w-md"
                >
                  <span class="flex select-none items-center pl-3 text-gray-500"
                    >+57</span
                  >
                  <input
                    type="text"
                    name="whatsapp-number"
                    id="whatsapp-number"
                    autocomplete="numero de whatsapp"
                    v-model="formState.whatsappNumber.value"
                    @input="
                      () => validateField('whatsappNumber', validatePhoneNumber)
                    "
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6"
                  />
                </div>
                <span
                  v-if="!formState.whatsappNumber.isValid"
                  class="text-red-500 text-sm mt-1"
                >
                <InformationCircleIcon class="h-5 w-5 inline-flex" /> Ingrese un número de WhatsApp válido.
                </span>
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="type-document"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Tipo de documento <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <select
                  id="type-document"
                  name="type-document"
                  autocomplete="tipo de documento"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:max-w-xs sm:leading-6"
                >
                  <option>CC</option>
                  <option>TI</option>
                  <option>CE</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="document-number"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Número de documento <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="document-number"
                  id="document-number"
                  autocomplete="numero de documento"
                  v-model="formState.documentNumber.value"
                  @input="
                    () =>
                      validateField('documentNumber', validateDocumentNumber)
                  "
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                />
              </div>
              <span
                v-if="!formState.documentNumber.isValid"
                class="text-red-500 text-sm mt-1"
              >
              <InformationCircleIcon class="h-5 w-5 inline-flex" /> Ingrese un número de documento válido.
              </span>
            </div>

            <div class="sm:col-span-4">
              <label
                for="occupation"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Profesión / Estudio realizado
                <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  autocomplete="ocupación"
                  v-model="formState.occupation.value"
                  @input="() => validateField('occupation', validateOccupation)"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                />
              </div>
              <span
                v-if="!formState.occupation.isValid"
                class="text-red-500 text-sm mt-1"
              >
              <InformationCircleIcon class="h-5 w-5 inline-flex" /> Ingrese una profesión o estudio realizado.
              </span>
            </div>

            <div class="sm:col-span-3">
              <label
                for="gender"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Género <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autocomplete="genero"
                  class="block w-full rounded-md border-0 py-1 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:max-w-xs sm:leading-6"
                >
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 space-y-10">
            <fieldset>
              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="terms-conditions"
                      name="terms-conditions"
                      type="checkbox"
                      v-model="formState.termsConditions.value"
                      @input="() => validateField('termsConditions',validateTermsConditions)"
                      class="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label
                      for="terms-conditions"
                      class="font-medium text-gray-900"
                      >Términos y Condiciones</label
                    >
                    <p class="text-gray-500">
                      Acepto los términos y condiciones de H&M
                      Micropigmentación.
                    </p>
                  </div>
                </div>
                <span
                  v-if="!formState.termsConditions.isValid"
                  class="text-red-500 text-sm mt-1 ml-7"
                >
                <InformationCircleIcon class="h-5 w-5 inline-flex" /> Error: Términos y Condiciones No Aceptados
                </span>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="privacity"
                      name="privacity"
                      type="checkbox"
                      v-model="formState.privacity.value"
                      @input="() => validateField('privacy', validatePrivacity)"
                      class="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="privacity" class="font-medium text-gray-900"
                      >Privacidad de datos</label
                    >
                    <p class="text-gray-500">
                      Al enviar información a través del formulario, aceptas
                      nuestra política de privacidad.
                    </p>
                  </div>
                </div>
                <span
                  v-if="!formState.termsConditions.isValid"
                  class="text-red-500 text-sm mt-1 ml-7"
                >
                <InformationCircleIcon class="h-5 w-5 inline-flex" /> Error: Privacidad de datos No Aceptados
                </span>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancelar
        </button>
        <button
          type="submit"
          :disabled="!isFormValid"
          class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
input, option, select {
  font-size: 0.8rem !important;
}
</style>
<script setup>
import { ExclamationTriangleIcon } from "@heroicons/vue/24/solid";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

import { ref, computed } from "vue";
import * as formValidation from "../utils/validators";

const formState = ref({
  fullname: { value: "", isValid: true },
  email: { value: "", isValid: true },
  whatsappNumber: { value: "", isValid: true },
  documentNumber: { value: "", isValid: true },
  occupation: { value: "", isValid: true },
  termsConditions: { value: "", isValid: true },
  privacity: { value: "", isValid: true}
});

const validateField = (field, validationFunction) => {
  formState.value[field].isValid = validationFunction(
    formState.value[field].value
  );
};

const validateForm = () => {
  validateField("fullname", formValidation.validateFullname);
  validateField("email", formValidation.validateEmail);
  validateField("whatsappNumber", formValidation.validatePhoneNumber);
  validateField("documentNumber", formValidation.validateDocumentNumber);
  validateField("occupation", formValidation.validateOccupation);
  validateField("termsConditions", formValidation.validateTermsConditions);
  validateField("privacity", formValidation.validatePrivacity)
};

const isFormValid = computed(() => {
  for (const field in formState.value) {
    if (!formState.value[field].isValid) {
      return false;
    }
  }
  return true;
});
</script>
