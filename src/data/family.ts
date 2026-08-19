export interface FamilyMember {
  name: string
  title: string
  image: string
  /** Whether this member's children start collapsed in the tree UI. */
  collapsed?: boolean
  children?: FamilyMember[]
}

export const familyRoot: FamilyMember = {
  name: 'Jim & Suzanna Adera',
  title: '',
  image: 'img/jim_sue.png',
  collapsed: true,
  children: [
    {
      name: 'Sylvan',
      title: '1st born',
      image: 'img/silvan.jpeg',
      collapsed: true,
      children: [{ name: 'Allan', title: '1st born', image: 'img/default.png' }],
    },
    {
      name: 'Mary',
      title: '2nd born',
      image: 'img/default.png',
    },
    {
      name: 'Fransisca',
      title: '3rd born',
      image: 'img/default.png',
      collapsed: true,
      children: [
        { name: 'Otieno', title: '1st born', image: 'img/default.png' },
        { name: 'Calvin', title: '2nd born', image: 'img/default.png' },
        { name: 'Martin', title: '3rd born', image: 'img/default.png' },
        { name: 'Wicky', title: '4th born', image: 'img/default.png' },
        { name: 'Awino', title: '5th born', image: 'img/awino.jpg' },
        { name: 'Frank', title: '6th born', image: 'img/default.png' },
        { name: 'Orichwe', title: '7th born', image: 'img/default.png' },
        { name: 'Vanessa', title: '8th born', image: 'img/default.png' },
      ],
    },
    {
      name: 'Julita',
      title: '4th born',
      image: 'img/julita.jpeg',
      collapsed: true,
      children: [
        { name: 'Marlene', title: '1st born', image: 'img/marlene.jpeg' },
        { name: 'Terry', title: '2nd born', image: 'img/default.png' },
        { name: 'June', title: '3rd born', image: 'img/june.jpeg' },
        { name: 'Mandella', title: '4th born', image: 'img/default.png' },
        { name: 'Nancy', title: '5th born', image: 'img/default.png' },
        { name: 'Viola', title: '5th born', image: 'img/default.png' },
      ],
    },
    {
      name: 'Charles',
      title: '5th born',
      image: 'img/charles.jpeg',
      collapsed: true,
      children: [
        { name: 'Paula', title: '1st born', image: 'img/default.png' },
        { name: 'Faith', title: '2nd born', image: 'img/default.png' },
        { name: 'Evans', title: '3rd born', image: 'img/evans.jpeg' },
        { name: 'Mike', title: '4th born', image: 'img/default.png' },
      ],
    },
    {
      name: 'Esther',
      title: '6th born',
      image: 'img/esther.jpeg',
      collapsed: true,
      children: [
        { name: 'Okomo', title: '1st born', image: 'img/okomo.jpeg' },
        { name: 'Eddy', title: '2nd born', image: 'img/default.png' },
        { name: '', title: '3rd born', image: 'img/default.png' },
        { name: 'Celestine', title: '4th born', image: 'img/default.png' },
        { name: '', title: '5th born', image: 'img/default.png' },
      ],
    },
    {
      name: 'Gaudensia',
      title: '7th born',
      image: 'img/default.png',
      collapsed: true,
      children: [
        { name: 'Omondi', title: '1st born', image: 'img/omondi.jpg' },
        { name: 'Fredrick', title: '2nd born', image: 'img/fredrick.jpeg' },
        { name: 'Calvin', title: '3rd born', image: 'img/default.png' },
        { name: 'Maxwell', title: '4th born', image: 'img/default.png' },
      ],
    },
    {
      name: 'Rose',
      title: '8th born',
      image: 'img/rose.jpeg',
      collapsed: true,
      children: [
        {
          name: 'Nick',
          title: '1st born',
          image: 'img/nick.jpeg',
          collapsed: true,
          children: [
            { name: 'Eliana', title: '1st born', image: 'img/eliana.png' },
            { name: 'Nila', title: '2nd born', image: 'img/nila.png' },
          ],
        },
        { name: 'Lillian', title: '2nd born', image: 'img/lillian.jpeg' },
        { name: 'Felix', title: '3rd born', image: 'img/felix.jpeg' },
        { name: 'Maxwell', title: '4th born', image: 'img/maxwell.jpeg' },
        { name: 'Marrianne', title: 'last born', image: 'img/marriane.jpeg' },
      ],
    },
  ],
}
