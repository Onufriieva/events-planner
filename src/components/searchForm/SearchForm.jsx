

export const Form = () => {
  return(
<form class="search-form" id="search-form">
<input
  class="input"
  type="text"
  name="searchQuery"
  autocomplete="off"
  placeholder="Search images..."
/>
<button class="search"type="submit">Search</button>
</form> 
  )

  }