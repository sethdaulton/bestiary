const newPostFormHandler = async (event) => {
    event.preventDefault();

    const monster_name = document.querySelector('input[name="monster-name"]').value;
    const monster_description = document.querySelector('textarea[name="monster-description"]').value;
    const monster_ac = document.querySelector('textarea[name="monster-ac"]').value;
    const monster_hd = document.querySelector('textarea[name="monster-hd"]').value;
    const monster_hp = document.querySelector('textarea[name="monster-hp"]').value;
    const monster_cr = document.querySelector('textarea[name="monster-cr"]').value;
    const monster_attack = document.querySelector('textarea[name="monster-attack"]').value;
    const monster_str = document.querySelector('textarea[name="monster-str"]').value;
    const monster_dex = document.querySelector('textarea[name="monster-dex"]').value;
    const monster_con = document.querySelector('textarea[name="monster-con"]').value;
    const monster_wis = document.querySelector('textarea[name="monster-wis"]').value;
    const monster_int = document.querySelector('textarea[name="monster-int"]').value;
    const monster_chr = document.querySelector('textarea[name="monster-chr"]').value;
    
    // console.log(postTitle);
    // console.log(postContent);

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            monster_name,
            // all stats here 
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