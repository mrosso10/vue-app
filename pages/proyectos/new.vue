<template lang="pug">
form
  v-text-field(
        v-model='name'
        :error-messages='nameErrors'
        :counter='10'
        label='Name'
        required=''
        @input='$v.name.$touch()'
        @blur='$v.name.$touch()')

  //- v-text-field(   v-model='email'
                  :error-messages='emailErrors'
                  label='E-mail'
                  required=''
                  @input='$v.email.$touch()'
                  @blur='$v.email.$touch()')

  //- v-select(v-model='select' :items='items' :error-messages='selectErrors' label='Item' required='' @change='$v.select.$touch()' @blur='$v.select.$touch()')
  //- v-checkbox(v-model='checkbox' :error-messages='checkboxErrors' label='Do you agree?' required='' @change='$v.checkbox.$touch()' @blur='$v.checkbox.$touch()')
  v-btn.mr-4(@click='submit' ref="submit") submit
  v-btn.mr-4(@click='clear' ref="clear") clear
  v-btn(to="/proyectos") volver

  //- p Nombre: {{ name }}
  //- p Mail: {{ email }}
  //- p Sel: {{ select }}
</template>
<style>
form {
  max-width: 300px;
}
</style>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
    select: { required },
    // checkbox: {
    //   checked(val) {
    //     return val
    //   },
    // },
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: [
      { value: 11, text: 'Primero' },
      { value: 22, text: 'Segundo' },
    ],
    checkbox: false,
  }),

  computed: {
    // checkboxErrors() {
    //   const errors = []
    //   if (!this.$v.checkbox.$dirty) return errors
    //   !this.$v.checkbox.checked && errors.push('You must agree to continue!')
    //   return errors
    // },
    // selectErrors() {
    //   const errors = []
    //   if (!this.$v.select.$dirty) return errors
    //   !this.$v.select.required && errors.push('Item is required')
    //   return errors
    // },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    // emailErrors() {
    //   const errors = []
    //   if (!this.$v.email.$dirty) return errors
    //   !this.$v.email.email && errors.push('Must be valid e-mail')
    //   !this.$v.email.required && errors.push('E-mail is required')
    //   return errors
    // },
  },

  methods: {
    submit() {
      this.$v.$touch()
      // this.$store.commit('proyectos/add', { nombre: this.name })
      // this.$router.push({ name: 'proyectos' })
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
}
</script>
