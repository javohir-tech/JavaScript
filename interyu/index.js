let open = indexedDB.open('mening bazam', 1);

open.onupgradeneeded = (event) => {
    let db = event.target.result;
    db.createObjectStore('users', { keyPath: 'id' });
    console.log('yangi baza va jadval yaratildi ')
}

open.onsuccess = (event) => {
    let db = event.target.result;
    console.log(`baza ochildi`, db)

    let transaction = db.transaction('users', 'readwrite');
    let store = transaction.objectStore('users');

    const user = {
        id: 1,
        name: 'Javohir',
        age: 21
    }

    let request = store.add(user);

    request.onsuccess = () => {
        console.log('malumot bzaga qoshildi')
    }

    request.onerror = (event) => {
        console.log('maalumot bazaga qoshilmadi', event.target.error)
    }

}

open.onerror = (event) => {
    console.log('xato: ', event.target.result)
}