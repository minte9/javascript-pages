### Vue vs. jQuery

For simple example, jQuery is more direct and more readable. 

Vue
~~~js
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<div id="app">
    <h1>{{ message }}</h1>
    <button @click='changeMessage'>Click me</button>
</div>

<script>
    const { createApp } = Vue;

    createApp({
        data() {
            return {
                'message': 'Hello Vue!'
            }
        },
        methods: {
            changeMessage() {
                this.message = 'Vue is awesome!';
            }
        }
    }).mount('#app');
</script>
~~~

jQuery
~~~js
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<div id="app">
    <h1 id="message">Hello jQuery!</h1>
    <button id="changeBtn">Click me</button>
</div>

<script>
    $(document).ready(function () {
        $('#changeBtn').on('click', function () {
            $('#message').text('jQuery is awesome!');
        });
    });
</script>
~~~

### More items

As soon as you add more interactive pices, Vue becames more manageable and cleaner.  
Vue is reactive and declarative.  

DOM automatically updates when items changes.  
No need to re-bind events or re-render the list.  
Component logic is cleanly separated from the HTML.  

Vue
~~~js
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<div id="app">
    <h2>My List ({{ items.length }} items)</h2>

    <ul>
        <li v-for="(item, index) in items" :key="index">
            {{ item }} <button @click="removeItem(index)">Remove</button>
        </li>
    </ul>

    <input v-model="newItem" placeholder="New Item" @keyup.enter="addItem">
    <button @click="addItem">Add</button>
</div>

<script>
    const { createApp } = Vue;

    createApp({
        data() {
            return {
                'items': ['apple', 'banana'],
            }
        },
        methods: {
            removeItem(index) {
                this.items.splice(index, 1);
            },
            addItem() {
                if (this.newItem.trim()) {
                    this.items.push(this.newItem.trim());
                    this.newItem = '';
                }
            }
        }
    }).mount('#app');
</script>
~~~

jQuery
~~~js
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<div id="app">
  <h2>My List (<span id="count">2</span> items)</h2>

  <ul id="itemList">
    <li>Apple <button class="remove">Remove</button></li>
    <li>Banana <button class="remove">Remove</button></li>
  </ul>

  <input id="newItem" placeholder="New item">
  <button id="addBtn">Add</button>
</div>

<script>
  function updateCount() {
    $('#count').text($('#itemList li').length);
  }

  function bindRemoveHandlers() {
    $('.remove').off('click').on('click', function () {
      $(this).parent().remove();
      updateCount();
    });
  }

  $(document).ready(function () {
    updateCount();
    bindRemoveHandlers();

    $('#addBtn').on('click', function () {
      const newItem = $('#newItem').val().trim();
      if (newItem) {
        $('#itemList').append(
          `<li>${newItem} <button class="remove">Remove</button></li>`
        );
        $('#newItem').val('');
        updateCount();
        bindRemoveHandlers(); // Re-bind click events
      }
    });
  });
</script>
~~~

### API Fetch

We’ll simulate fetching a random number from an API with async/wait. 

~~~js
<div id="app">
    <h1>Api Fetch</h1>

    <p>Value: {{ my_number }}</p>
    <p>Square: {{ square }}</p>
    <p>Status: {{ isEven ? 'Even' : 'Odd' }}</p>

    <input type="number" v-model.number="my_number" placeholder="Enter a number (0-100)">

    <button @click="fetchRandomNumber">Get Random Number</button>
    <p v-if="loading">Loading...</p>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const { createApp } = Vue;

    createApp({
        data() {
            return {
                my_number: 0,
                loading: false,
            }
        },
        computed: {
            square() {
                return this.my_number * this.my_number;
            },
            isEven() {
                return this.my_number % 2 === 0;
            }
        },
        methods: {
            async fetchRandomNumber() {
                this.loading = true;
                try {
                    const res = await fetch('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=1');
                    const data = await res.json();
                    this.my_number = data[0];
                } catch (error) {
                    alert('Error fetching random number.');
                } finally {
                    this.loading = false;
                }
            }
        }
    }).mount('#app');
</script>
~~~