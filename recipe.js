/* Basic Reset & Font */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', sans-serif;
  background: #f8f8f8;
  color: #333;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

.recipe-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.recipe-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, background 0.2s ease;
}
.recipe-card:hover {
  transform: scale(1.02);
  background: #fffdf5;
}
.recipe-card img {
  width: 100%;
  height: auto;
  border-radius: 6px;
}
.description {
  margin: 10px 0;
  font-style: italic;
}
.instructions {
  margin-top: 10px;
}

.toggle-btn {
  margin-top: 10px;
  padding: 8px 12px;
  background: #ff7043;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.toggle-btn:hover {
  background: #e65100;
}

.hidden {
  display: none;
}
