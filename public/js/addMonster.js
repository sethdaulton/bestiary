const newPostFormHandler = async (event) => {
    event.preventDefault();

    const monster_name = document.querySelector('input[name="monster-name"]').value;
    const monster_description = document.querySelector('textarea[name="monster-description"]').value;
    // include all of the stats for each monster
    
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