<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <v-card class="d-flex align-center justify-center mb-2 me-3 ms-3">
                <v-row class="d-flex align-center justify-center ps-2 pe-2 mt-2 mb-2">
                    <v-col cols="12" md="6" class="d-flex align-center">
                        <v-card-title class="d-flex align-center">
                            {{ item.title }}
                        </v-card-title>
                    </v-col>
                    <v-col cols="12" md="6" class="d-flex align-center justify-end pe-6">
                        <v-btn color="primary" class="me-6" @click="showEditDialog(index)">
                            Edit
                        </v-btn>
                        <v-btn @click="deleteItem(index)" color="error" outlined>
                            Delete
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </div>

        <edit-site :selectedItem="selectedItem" @changeSubmit="changeSubmit" @hideEditDialog="hideEditDialog"
            v-if="showEditModal" />
    </div>
</template>
  
<script>
import EditSite from './EditSite.vue';

export default {
    components: {
        EditSite
    },
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            showEditModal: false,
            selectedItem: null
        };
    },
    methods: {
        showEditDialog(index) {
            this.selectedItem = Object.assign({}, this.items[index]);
            this.showEditModal = true;
        },
        hideEditDialog() {
            this.showEditModal = false;
            this.selectedItem = null;
        },
        saveChanges(index) {
            this.showEditModal = false;
            this.$set(this.items, index, this.selectedItem);
        },
        deleteItem(index) {
            this.items.splice(index, 1);
        },
        changeSubmit(e) {
            this.$emit('changeSubmit', e);
        }
    }
};
</script>
  
<style scoped>
v-row {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
  