
# Fagprøve - Den Glade Skorpe - Oktober 2024
Lonnie Storgaard - WebH123-2

## Vurdering af egen indsats

Min indsats startede godt ud, med gode ambitioner ift. projekt planlægning. Jeg oprettede mit Trello board of begyndte at danne overblik over komponenter, sider osv. Men hen ad vejen som der opstod problemer og nye ideer til løsninger, kunne jeg have været bedre til at opdatere mit board.

Boardet med de gode ambitioner kan findes her:
 https://trello.com/invite/b/671609fd476b32a7ec38390d/ATTI51ba52738a0d808306b1f26f04f4e73cBA7A8144/webdeveksamen2024

Jeg synes, derudover at min indsats har været målrettet og effektiv, og at jeg er nået frem til en brugbar løsning på opgaven, hvor jeg kommer omkring mange forskellige områder af uddannelsen.

## Argumentation for valg truffet under opgaven

### Tilvalg
Jeg har valgt at tilføje authentication samt at gøre siden responsiv. Jeg prioriterede de tilvalg, der trak mig lidt væk fra "Get, Post, Put, Delete", da jeg synes det allerede er bygget ind i de obligatoriske elementer i opgaven.

### Hooks og Komponenter
Jeg har forsøgt at flytte så meget som muligt i hooks og komponenter for at effektivisere processen. I denne forbindelse har jeg valgt primært at bruge sende props med komponentet, frem for at arbejde med context, da det er en lille side, og der ikke er kæmpe store mængder information, der skal sendes rundt med mellem sider og komponenter.

## Redegørelse for oprindelsen af de forskellige kodeelementer i opgaven

De kode-elementer jeg har brugt i opgaven, er alle nogle vi har lært i undervisningen.


## Eksempel på Dynamisk styring af størrelse og pris på en ret

I mit DishTemplate komponent, der styrer hvordan hver ret præsenteres på detaljesiden, mapper  jeg retten 'price' array (her kaldt "options") til at udskrive valgmulighederne for størrelse i min dropdown. På den måde opdaterer den selv valgmulighederne, hvis der tilføjes nye priser og størrelser i databasen.

Staten size, sætter jeg for at sende den med i min addItem funktion, så den også fremgår af kurven.

```javascript
    //States
    const [size, setSize] = useState('normal');

    //Dynamisk liste over størrelser, hentet fra rettens prisliste.

    let options = [];
    let price = '';
    

    // Fail-safe for at undgå "undefined"-problemer ved indlæsning.
    {dish.price !== undefined ? options = Object.keys(dish.price) : null}

    {dish.price !== undefined ? price=dish.price[size] : null}

 //Styring af størrelsesvalg

    const handleChange = (e) => {
        setSize(e.target.value)
    }
```

```javascript
 <div className={styles.selectionBox}>
    <h2 className={styles.selectionHeading}>Vælg størrelse</h2>
        <form>
            <select name="size" onChange={handleChange}>

                {options.map((option, index) => {
                    return <option key={index} value={option}>{option}</option>
                     }) }
            </select>
        </form>
    </div>
```


