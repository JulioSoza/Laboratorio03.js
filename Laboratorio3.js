// Constructor 
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let images = {
    list: [], 

    // Método contains: 
    contains: function(title) {
        return this.list.some(image => image.title === title);
    },

    // Método add: 
    add: function(title, artist, date) {
        if (!this.contains(title)) {
            const newImage = new Image(title, artist, date);
            this.list.push(newImage);
        } else {
            console.log(`${title} ya está en la lista.`);
        }
    },

    // Método show
    show: function() {
        if (this.list.length === 0) {
            console.log('No hay imágenes en la lista.');
        } else {
            this.list.forEach(image => {
                console.log(`${image.title} (${image.artist}, ${image.date})`);
            });
        }
    },

    // Método clear
    clear: function() {
        this.list = [];
        console.log('Lista de imágenes eliminada.');
    }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503); // Esta no se debe agregar de nuevo
images.show(); 
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> The Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)

images.clear(); // Elimina todas las imágenes
images.show();  // -> No hay imágenes en la lista.
