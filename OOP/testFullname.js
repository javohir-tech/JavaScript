import { fullName } from "./fullname"

test('test with out middle name', () => {
    expect(fullName('Javohir', 'Suvonov')).toBe('Suvonov Javohir')
})