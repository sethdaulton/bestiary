const newMonsterFormHandler = async (event) => {
    event.preventDefault();

    const monster_name = document.querySelector('input[id="monster-name"]').value;
    const monster_description = document.querySelector('[id="monster-description"]').value;
    const monster_ac = document.querySelector('input[id="monster-ac"]').value;
    const monster_hd = document.querySelector('input[id="monster-hd"]').value;
    const monster_hp = document.querySelector('input[id="monster-hp"]').value;
    const monster_cr = document.querySelector('input[id="monster-cr"]').value;
    const monster_attack = document.querySelector('input[id="monster-attack"]').value;
    const monster_str = document.querySelector('input[id="monster-str"]').value;
    const monster_dex = document.querySelector('input[id="monster-dex"]').value;
    const monster_con = document.querySelector('input[id="monster-con"]').value;
    const monster_wis = document.querySelector('input[id="monster-wis"]').value;
    const monster_int = document.querySelector('input[id="monster-int"]').value;
    const monster_chr = document.querySelector('input[id="monster-chr"]').value;

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