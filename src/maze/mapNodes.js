constructor(maps) {
    const [map] = null;

    // Construct a map

    const int = Math.floor(Math.random() * 3);


      function nextImage() {
        setIndex((i) => (i + 1) % images.length);
        }

      function prevImage() {
        setIndex((i) => (i - 1 + images.length) % images.length);
        }
    
        

      const date = new Date().toLocaleDateString();
      const userName = 'Eich';
      this.broadcastEvent(userName, GameEvent.End, { name: userName, score: score, date: date });
    }, 5000);
  }