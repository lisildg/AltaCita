import React from 'react'
import LoginForm from '../components/LoginForm'

function LoginPage() {
  return (
    <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <LoginForm/>
    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
)
}

export default LoginPage