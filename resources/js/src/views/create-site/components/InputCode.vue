<template>
    <div>
        <codemirror class="codemirror" :options="editorOptions" v-model="code"></codemirror>
    </div>
</template>
    
<script>
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/mode/htmlmixed/htmlmixed'; // Импорт режима HTML

import VueCodemirror from 'vue-codemirror';

export default {
    components: {
        codemirror: VueCodemirror.codemirror
    },
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            code: this.value,
            editorOptions: {
                mode: 'htmlmixed',
                lineNumbers: true,
                theme: 'material-darker',
                htmlMode: true
            }
        };
    },
    watch: {
        value(newVal) {
            this.code = newVal;
        },
        code(newVal) {
            this.$emit('input', newVal);
        }
    }
};
</script>
    
<style scoped>
/* Добавьте свои стили */
</style>
  