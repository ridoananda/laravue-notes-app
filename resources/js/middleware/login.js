export default isLoggedIn = async (to, from, next) => {
    try {
        await axios.get('/api/authenticated')
        return next({ name: 'Home' })
    } catch (error) {        
        return next({ name: 'Login' })
    }
}