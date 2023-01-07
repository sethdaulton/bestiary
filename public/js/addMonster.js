const newPostFormHandler = async (event) => {
    event.preventDefault();

    const monster_name = document.querySelector('input[name="monster-name"]').value;
    const monster_description = document.querySelector('textarea[name="monster-description"]').value;
    const monster_ac = document.querySelector('input[name="monster-ac"]').value;
    const monster_hd = document.querySelector('input[name="monster-hd"]').value;
    const monster_hp = document.querySelector('input[name="monster-hp"]').value;
    const monster_cr = document.querySelector('input[name="monster-cr"]').value;
    const monster_attack = document.querySelector('input[name="monster-attack"]').value;
    const monster_str = document.querySelector('input[name="monster-str"]').value;
    const monster_dex = document.querySelector('input[name="monster-dex"]').value;
    const monster_con = document.querySelector('input[name="monster-con"]').value;
    const monster_wis = document.querySelector('input[name="monster-wis"]').value;
    const monster_int = documengitt.querySelector('input[name="monster-int"]').value;
    const monster_chr = document.querySelector('input[name="monster-chr"]').value;
    
    // console.log(postTitle);
    // console.log(postContent);

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            monster_name,
            monster_description,
            monster_ac,
            monster_hd,
            monster_hp,
            monster_cr,
            monster_attack,
            monster_str,
            monster_dex,
            monster_con,
            monster_wis,
            monster_int,
            monster_chr,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Unable to create monster')
    };
};

document
    .querySelector('#new-monster-form')
    .addEventListener('submit', newMonsterFormHandler);