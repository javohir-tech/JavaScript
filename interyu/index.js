let open = indexedDB.open('mening bazam', 3);

open.onupgradeneeded = (event) => {

    let db = event.target.result;

    if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
        console.log('yangi baza va jadval yaratildi ')
    }
}

open.onsuccess = (event) => {

    const db = event.target.result;

    let transaction = db.transaction('users', 'readwrite');
    let store = transaction.objectStore('users');

    let user = {
        name: 'Javohir',
        age: 21
    }

    const request = store.add(user);

    request.onsuccess = () => {
        console.log('user storega qoshildi')
    }

    request.onerror = (event) => {
        console.log(`xato : ${event.target.error}`)
    }
}

open.onerror = (event) => {
    console.log('Xato baza yaratilmadi : ', event.target.error)
}