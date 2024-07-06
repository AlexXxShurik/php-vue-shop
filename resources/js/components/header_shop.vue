<template>
    <div class="burger-menu" :class="{ 'open': isOpen }">
        <!-- Серый фон -->
        <div class="overlay" v-if="isOpen" @click="toggleMenu"></div>

        <!-- Иконка бургера -->
        <div class="burger-icon" @click="toggleMenu">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <!-- Меню -->
        <div class="menu">
            <ul>
                <li><a href="#">Пункт меню 1</a></li>
                <li><a href="#">Пункт меню 2</a></li>
                <li><a href="#">Пункт меню 3</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: true
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        }
    }
};
</script>


<style scoped>

.burger-menu {
    position: relative;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: none;
}

.burger-menu.open .overlay {
    display: block;
}

.burger-icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    left: 20px;
}

.burger-icon div {
    width: 100%;
    height: 2px;
    background-color: black;
    transition: all 0.3s ease;
}

.menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 200px;
    height: 100vh;
    background-color: white;
    transition: all 0.3s ease;
    z-index: 1000;
    padding: 30px;
    text-align: center;
}

.burger-menu.open .menu {
    left: 0;
}

.menu ul {
    list-style-type: none;
    padding: 0;
}

.menu ul li {
    padding: 10px;
}

.menu ul li a {
    text-decoration: none;
    color: black;
}

</style>
