const newMonsterFormHandler = async (event) => {
    event.preventDefault();

    const monster_name = document.querySelector('#monster-name');
    const monster_description = document.querySelector('#monster-description');
    const monster_ac = document.querySelector('#monster-ac');
    const monster_hd = document.querySelector('#monster-hd');
    const monster_hp = document.querySelector('#monster-hp');
    const monster_cr = document.querySelector('#monster-cr');
    const monster_attack = document.querySelector('#monster-attack');
    const monster_str = document.querySelector('#monster-str');
    const monster_dex = document.querySelector('#monster-dex');
    const monster_con = document.querySelector('#monster-con');
    const monster_wis = document.querySelector('#monster-wis');
    const monster_int = document.querySelector('#monster-int');
    const monster_chr = document.querySelector('#monster-chr');

    //    const monster_chr = document.querySelector('input[id="monster-chr"]').value;

    console.log(monster_name.value);
    console.log('===========================');

    const response = await fetch('/api/monster/createmonster', {
        method: 'POST',
        body: JSON.stringify({
            name: monster_name.value,
            description: monster_description.value,
            ac: monster_ac.value,
            hd: monster_hd.value,
            hp: monster_hp.value,
            cr: monster_cr.value,
            attack: monster_attack.value,
            str: monster_str.value,
            dex: monster_dex.value,
            con: monster_con.value,
            wis: monster_wis.value,
            int: monster_int.value,
            chr: monster_chr.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Unable to create monster')
    };
};

document
    .querySelector('.new-monster-form')
    .addEventListener('submit', newMonsterFormHandler);