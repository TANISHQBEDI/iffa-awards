type NavItem = {
    id: string;
    label: string;
    href: string;
}

export const excludedNavIds: string[] = ['00']

export const NAV_ITEMS: NavItem[] = [
    {
        id: '00',
        label: 'Buy Tickets',
        href: '/tickets'
    },
    {
        id: '01',
        label: 'Past Events',
        href: '/events'
    },
    {
        id: '02',
        label: 'Latest News',
        href: '/news'
    }
]