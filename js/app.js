

const getRandomInit= (min, max)=> {
    return Math.floor(Math.random() * (max - min) + min);
    
  }
  document.addEventListener('DOMContentLoaded',()=>{
    
    fetchData()
  })

  const boton =document.querySelector('.btn');
  console.log(boton)

  const fetchData = async ()=>{
    const num=getRandomInit(1,151)
    try{

        
        const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${num}` );
        const data= await res.json()
        pintarCard(data)
    }catch (e){
        console.log(e)

    }
  }

  const pintarCard = (pokemon)=>{
      console.log("leo",pokemon)
      const flex = document.querySelector('.flex')
      const template = document.querySelector('.template-card').content
      const clone = template.cloneNode(true)
      const fragment = document.createDocumentFragment()
      clone.querySelector('.card-body-img').setAttribute('src',pokemon.sprites.other.dream_world.front_default)
      clone.querySelector('.nombre').innerHTML=`${pokemon.name} <p> ${pokemon.stats[0].base_stat} hp</p>`;
      clone.querySelector('.exp').innerHTML=`${pokemon.base_experience} Exp`;
      clone.querySelectorAll('.info-gral h3')[0].textContent=`${pokemon.stats[1].base_stat}k`
      clone.querySelectorAll('.info-gral h3')[1].textContent=`${pokemon.stats[3].base_stat}k`
      clone.querySelectorAll('.info-gral h3')[2].textContent=`${pokemon.stats[2].base_stat}k`
      fragment.appendChild(clone)
      flex.appendChild(fragment)
  }