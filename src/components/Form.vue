<template>
  <div id="person_data" class="mx-auto px-10 py-8 sm:px-auto sm:py-12 sm:w-[44rem]">
    <form @submit.prevent="validateForm">
      <div class="space-y-10">
        <div class="">
          <h2 class="text-xl sm:text-2xl font-semibold leading-7 text-sky-700">
            Formulario | Curso diseño de cejas
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
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Información Personal
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Digite sus datos personales.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="full_name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Nombre completo <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autocomplete="nombre completo"
                  v-model="formState.full_name.value"
                  @input="() => validateField('full_name', validateFullname)"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                />
              </div>
              <span
                v-if="!formState.full_name.isValid"
                class="text-red-500 text-sm mt-1"
              >
                <InformationCircleIcon class="h-5 w-5 inline-flex" /> Ingrese un
                nombre completo válido.
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
                <InformationCircleIcon class="h-5 w-5 inline-flex" /> Ingrese un
                correo electrónico válido.
              </span>
            </div>

            <div class="sm:col-span-3">
              <label
                for="phone"
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
                    name="phone"
                    id="phone"
                    autocomplete="numero de whatsapp"
                    v-model="formState.phone.value"
                    @input="() => validateField('phone', validatePhoneNumber)"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6"
                  />
                </div>
                <span
                  v-if="!formState.phone.isValid"
                  class="text-red-500 text-sm mt-1"
                >
                  <InformationCircleIcon class="h-5 w-5 inline-flex" /> Ingrese
                  un número de WhatsApp válido.
                </span>
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="type_doc"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Tipo de documento <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <select
                  id="type_doc"
                  name="type_doc"
                  v-model="formState.type_doc.value"
                  autocomplete="tipo de documento"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:max-w-xs sm:leading-6"
                >
                <option>CC</option>
                  <option>TI</option>
                  <option>CE</option>
                </select>
              </div>
              <span
                v-if="!formState.type_doc.isValid"
                class="text-red-500 text-sm mt-1"
              >
                <InformationCircleIcon class="h-5 w-5 inline-flex" />
                Elige un tipo de documento
              </span>
            </div>

            <div class="sm:col-span-3">
              <label
                for="doc_number"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Número de documento <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="doc_number"
                  id="doc_number"
                  autocomplete="numero de documento"
                  v-model="formState.doc_number.value"
                  @input="
                    () => validateField('doc_number', validateDocumentNumber)
                  "
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                />
              </div>
              <span
                v-if="!formState.doc_number.isValid"
                class="text-red-500 text-sm mt-1"
              >
                <InformationCircleIcon class="h-5 w-5 inline-flex" /> Ingrese un
                número de documento válido.
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
                <InformationCircleIcon class="h-5 w-5 inline-flex" /> Ingrese
                una profesión o estudio realizado.
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
                  v-model="formState.gender.value"
                  autocomplete="genero"
                  class="block w-full rounded-md border-0 py-1 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:max-w-xs sm:leading-6"
                >
                <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
                <span
                  v-if="!formState.gender.isValid"
                  class="text-red-500 text-sm mt-1"
                >
                  <InformationCircleIcon class="h-5 w-5 inline-flex" />
                  Elige un genero
                </span>
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
                      id="terms_conditions"
                      name="terms_conditions"
                      type="checkbox"
                      v-model="formState.terms_conditions.value"
                      @input="() => validateField('terms_conditions',validateTermsConditions)"
                      class="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label
                      for="terms_conditions"
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
                  v-if="!formState.terms_conditions.isValid"
                  class="text-red-500 text-sm mt-1 ml-7"
                >
                  <InformationCircleIcon class="h-5 w-5 inline-flex" /> Error:
                  Términos y Condiciones No Aceptados
                </span>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="privacity"
                      name="privacity"
                      type="checkbox"
                      v-model="formState.privacity.value"
                      @input="() => validateField('privacity', validatePrivacity)"
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
                  v-if="!formState.privacity.isValid"
                  class="text-red-500 text-sm mt-1 ml-7"
                >
                  <InformationCircleIcon class="h-5 w-5 inline-flex" /> Error:
                  Privacidad de datos No Aceptados
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
          @click="sendAndSelectPlan"
          class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Enviar y Elegir plan
        </button>
      </div>
    </form>
  </div>

  <!-- Select plan component -->
  <div id="select_plan_component"
    class="mx-auto hidden px-8 items-center justify-center h-screen sm:w-[44rem]"
  >
    <form @submit.prevent="validateForm">
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
                for="select_plan"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Elegir plan <span class="text-red-500">*</span></label
              >
              <div class="mt-2">
                <select
                  id="select_plan"
                  name="select_plan"
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
        <button
          type="button"
          @click="buttonBack"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Atrás
        </button>
        <button
          type="submit"
          @click="validateFormAndRedirect"
          class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Registrarse
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
input,
option,
select {
  font-size: 0.8rem !important;
}
</style>
<script setup>
import { ExclamationTriangleIcon } from "@heroicons/vue/24/solid";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

import { ref, computed } from "vue";
import * as formValidation from "../utils/validators";
import { useRouter } from "vue-router";
import axios from "axios";

/* const router = useRouter(); */

const formState = ref({
  full_name: { value: "", isValid: true },
  email: { value: "", isValid: true },
  phone: { value: "", isValid: true },
  doc_number: { value: "", isValid: true },
  occupation: { value: "", isValid: true },
  terms_conditions: { value: "", isValid: true },
  privacity: { value: "", isValid: true },
  type_doc: {value: "", isValid: true},
  gender: {value: "", isValid: true}
});

const validateField = (field, validationFunction) => {
  formState.value[field].isValid = validationFunction(
    formState.value[field].value
  );
};

const isFormValid = computed(() => {
  for (const field in formState.value) {
    if (!formState.value[field].isValid) {
      return false;
    }
  }
  return true;
});

const validateForm = () => {
  validateField("full_name", formValidation.validateFullname);
  validateField("email", formValidation.validateEmail);
  validateField("phone", formValidation.validatePhoneNumber);
  validateField("doc_number", formValidation.validateDocumentNumber);
  validateField("occupation", formValidation.validateOccupation);
  validateField("terms_conditions", formValidation.validateTermsConditions);
  validateField("privacity", formValidation.validatePrivacity);
  validateField("gender", formValidation.validateGender);
  validateField("type_doc", formValidation.validateTypeDoc);
};

const buttonBack = () => {
  const selectPlan = document.getElementById('select_plan_component')
  const homeForm = document.getElementById('person_data')
  if (selectPlan) {selectPlan.style.display = 'none', homeForm.style.display='block'}
}

const sendAndSelectPlan = () => {
  validateForm();
  if (isFormValid.value){
  const miDivForm = document.getElementById('person_data');
  const showSelectPlan = document.getElementById('select_plan_component')

    if (miDivForm) { miDivForm.style.display = 'none', showSelectPlan.style.display = 'flex';}
} else  { alert('Todos los campos deben estar completos y correctamente diligenciados')}
}

const validateFormAndRedirect = () => {

  if (isFormValid.value) {
    const sendData = {
      full_name: formState.value.full_name.value,
      email: formState.value.email.value,
      phone: formState.value.phone.value,
      doc_number: formState.value.doc_number.value,
      occupation: formState.value.occupation.value,
      gender: formState.value.gender.value,
      type_doc: formState.value.type_doc.value,
      terms_conditions: document.getElementById("terms_conditions").value,
      privacity: document.getElementById("privacity").value,
      select_plan: document.getElementById("select_plan").value
    };

    axios
      .post("http://127.0.0.1:8000/api/formcreate/", sendData)
      .then((response) => {
        console.log("Datos enviados con éxito a la API:", response.data);

      /*   router.push('/paso2'); */
      })
      .catch((error) => {
        console.error("Error al enviar datos a la API:", error);
      });

      setTimeout(() => {
        alert('Formulario completado exitosamente')
        window.location.href = 'https://www.hygmicropigmentacion.com/'});
      }
};
</script>
