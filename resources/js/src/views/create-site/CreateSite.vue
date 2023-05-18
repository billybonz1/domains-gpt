<template lang="">
    <v-card class="pb-4">
        <v-card-title>
            <span>Active site List</span>
        </v-card-title>
        <list-site @changeSubmit="changeSubmit" :items="items"  @delete-item="deleteItem"  />
    </v-card>
</template>

<script>
import ListSite from './components/ListSite.vue';
export default {
    components: {
        ListSite
    },
    data() {
        return {
            items: [
                { title: 'YouTube', discription: '', code: '' },
                { title: 'Amazon', discription: '', code: '' },
                { title: 'GitHub', discription: '', code: '' }
            ]
        };
    },
    methods: {
        deleteItem(index) {
            // Обработчик удаления элемента
            // Удаляем элемент массива с указанным индексом
            this.items.splice(index, 1);
        },
        changeSubmit(e) {
            console.log(e);
            this.items[0] = e
        }

    }
};
</script>
<style lang="">
    
</style>