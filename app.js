const App = {
    data() {
        return {

            title: 'Список дел',
            placeholderString: 'Введите название',
            inputValue: '',
            notes: [],

        };
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value;
        },
        addNewNote() {
            if (this.inputValue !== "") {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        inputKeyPress(event) {
            if (event.key === "Enter") {
                this.addNewNote();
            }
        },
        removeNote(index, event) {
            // console.log(this.notes[index]);
            // this.notes = [...this.notes.slice(0, index), ...this.notes.slice(index + 1)];
            // this.notes = this.notes.slice(0, index).concat(this.notes.slice(index + 1));
            this.notes.splice(index, 1);

        },

    }


}

Vue.createApp(App).mount('#app');