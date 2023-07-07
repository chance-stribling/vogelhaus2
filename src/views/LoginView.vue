<script>
import LoginCard from '../components/LoginCard.vue'
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  components: { LoginCard },
  setup() {
    const { loginWithRedirect } = useAuth0()
    const { logout } = useAuth0()

    return {
      login: () => {
        loginWithRedirect()
      },
      logout: () => {
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    }
  }
}
</script>
<template>
  <div>
    <LoginCard />
  </div>
</template>
