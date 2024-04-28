<script>
	import Item from './Item.svelte'

  export let data = []

  data = typeof(data) === 'string' ? JSON.parse(data) : data 
  
  console.log(data)
</script>

<main>


  {#each data as rec}

    <div>

      <Item item={rec}/>

    </div>
    
  {/each}
  
</main>