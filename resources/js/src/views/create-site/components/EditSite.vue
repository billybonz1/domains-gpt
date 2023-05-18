<template>
    <div class="edit-site">
        <v-card class="edit-site_modal pt-4 pe-4 pb-8 ps-4">
            <v-text-field label="Title" dense outlined v-model="selectedItem.title" />
            <v-textarea v-model="selectedItem.discription" outlined rows="4" label="Description"></v-textarea>
            <input-code v-model="selectedItem.code" />
            <v-row class="d-flex justify-space-between pe-3 ps-3 pt-5">
                <v-btn color="primary" class="mt-4" @click="submit">
                    Save changes
                </v-btn>
                <v-btn color="secondary" outlined class="mt-4" type="reset" @click="$emit('hideEditDialog')">
                    Cancel
                </v-btn>
            </v-row>
        </v-card>
    </div>
</template>
  
<script>
import InputCode from './InputCode.vue';

export default {
    components: {
        InputCode
    },
    props: {
        selectedItem: {
            type: Object,
            default: () => ({ title: '', description: '', code: '' })
        }
    },
    methods: {
        submit() {
            console.log(this.selectedItem);
            this.$emit('changeSubmit', this.selectedItem);
            this.$emit('hideEditDialog');
        }
    }
};
</script>

<style scoped>
.edit-site {
    z-index: 19;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #00000034;
    display: flex;
    justify-content: center;
    align-items: center;
}

.edit-site_modal {
    height: auto;
    width: 80%;
}
</style>