import React from 'react';
import {FormattedMessage} from 'react-intl';

import {
    IconAtom,
    IconBasket,
    IconBellRinging,
    IconBorderAll,
    IconBorderRadius,
    IconBoxMultiple,
    IconBrandChrome,
    IconBrandGravatar,
    IconBrush,
    IconBug,
    IconCalendar,
    IconChartArcs,
    IconChartCandle,
    IconChartInfographic,
    IconCircle,
    IconCircleOff,
    IconClipboardList,
    IconDashboard,
    IconDeviceAnalytics,
    IconFiles,
    IconForms,
    IconHelp,
    IconId,
    IconKey,
    IconLayoutList,
    IconLoader,
    IconLockAccess,
    IconMail,
    IconMenu,
    IconMessages,
    IconNfc,
    IconPalette,
    IconPencil,
    IconPhoneCall,
    IconPictureInPicture,
    IconReceipt2,
    IconRun,
    IconShadow,
    IconShape,
    IconShieldLock,
    IconSitemap,
    IconTools,
    IconTypography,
    IconUser,
    IconUserCheck,
    IconBrandAsana
} from '@tabler/icons';

const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics,
    IconChartArcs: IconChartArcs,
    IconClipboardList: IconClipboardList,
    IconChartInfographic: IconChartInfographic,
    IconForms: IconForms,
    IconReceipt2: IconReceipt2,
    IconPencil: IconPencil,
    IconPalette: IconPalette,
    IconShadow: IconShadow,
    IconPhoneCall: IconPhoneCall,
    IconBrandChrome: IconBrandChrome,
    IconFiles: IconFiles,
    IconAtom: IconAtom,
    IconTools: IconTools,
    IconBrush: IconBrush,
    IconLockAccess: IconLockAccess,
    IconShieldLock: IconShieldLock,
    IconKey: IconKey,
    IconTypography: IconTypography,
    IconMenu: IconMenu,
    IconBoxMultiple: IconBoxMultiple,
    IconCircleOff: IconCircleOff,
    IconCircle: IconCircle,
    IconBorderRadius: IconBorderRadius,
    IconBrandGravatar: IconBrandGravatar,
    IconShape: IconShape,
    IconUserCheck: IconUserCheck,
    IconId: IconId,
    IconLayoutList: IconLayoutList,
    IconBug: IconBug,
    IconLoader: IconLoader,
    IconRun: IconRun,
    IconUser: IconUser,
    IconHelp: IconHelp,
    IconSitemap: IconSitemap,
    IconPictureInPicture: IconPictureInPicture,
    IconMail: IconMail,
    IconMessages: IconMessages,
    IconNfc: IconNfc,
    IconCalendar: IconCalendar,
    IconBellRinging: IconBellRinging,
    IconBorderAll: IconBorderAll,
    IconChartCandle: IconChartCandle,
    IconBasket: IconBasket,
    IconBrandAsana:IconBrandAsana
};

const menuItems = {
    items: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="dashboard" />,
            type: 'group',
            children: [
                {
                    id: 'dash-default',
                    title: <FormattedMessage id="Dashboard" />,
                    type: 'item',
                    url: '/admin/dashboard',
                    icon: icons['IconDashboard'],
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'Match data',
            title: <FormattedMessage id="Match Data" />,
            type: 'group',
            children: [
                {
                    id: 'submitmatchdata',
                    title: <FormattedMessage id="Submit match data" />,
                    type: 'item',
                    url: '/admin/SubmitMatchData',
                    icon: icons['IconBrandAsana']
                },
                {
                    id: 'viewmatchdata',
                    title: <FormattedMessage id="View match data" />,
                    type: 'item',
                    url: '/admin/ViewMatchData',
                    icon: icons['IconPencil']
                }
            ]
        },
        {
            id: 'Teams',
            title: <FormattedMessage id="Teams" />,
            type: 'group',
            children: [
                {
                    id: 'createteam',
                    title: <FormattedMessage id="Create Team" />,
                    type: 'item',
                    url: '/admin/CreateTeam',
                    icon: icons['IconBrandAsana']
                },
                {
                    id: 'viewallteams',
                    title: <FormattedMessage id="View Teams" />,
                    type: 'item',
                    url: '/admin/ViewTeams',
                    icon: icons['IconPencil']
                }
            ]
        },
        {
            id: 'league',
            title: <FormattedMessage id="League" />,
            type: 'group',
            children: [
                {
                    id: 'createleague',
                    title: <FormattedMessage id="Create League" />,
                    type: 'item',
                    url: '/admin/CreateLeague',
                    icon: icons['IconUser']
                },
                {
                    id: 'viewallleagues',
                    title: <FormattedMessage id="View Leagues" />,
                    type: 'item',
                    url: '/admin/ViewLeagues',
                    icon: icons['IconUser']
                }
            ]
        },
        {
            id: 'cup',
            title: <FormattedMessage id="Cup" />,
            type: 'group',
            children: [
                {
                    id: 'createcup',
                    title: <FormattedMessage id="Create Cup" />,
                    type: 'item',
                    url: '/admin/CreateCup',
                    icon: icons['IconUser']
                },
                {
                    id: 'viewallcup',
                    title: <FormattedMessage id="View Cups" />,
                    type: 'item',
                    url: '/admin/ViewCups',
                    icon: icons['IconUser']
                }
            ]
        },
        {
            id: 'season',
            title: <FormattedMessage id="Season" />,
            type: 'group',
            children: [
                {
                    id: 'createseason',
                    title: <FormattedMessage id="Create Season" />,
                    type: 'item',
                    url: '/admin/CreateSeason',
                    icon: icons['IconUser']
                },
                {
                    id: 'viewallseason',
                    title: <FormattedMessage id="View Seasons" />,
                    type: 'item',
                    url: '/admin/ViewSeasons',
                    icon: icons['IconUser']
                }
            ]
        },
        {
            id: 'news',
            title: <FormattedMessage id="News" />,
            type: 'group',
            children: [
                {
                    id: 'createnews',
                    title: <FormattedMessage id="Create News" />,
                    type: 'item',
                    url: '/admin/CreateNews',
                    icon: icons['IconUser']
                },
                {
                    id: 'viewallnews',
                    title: <FormattedMessage id="View News" />,
                    type: 'item',
                    url: '/admin/ViewNews',
                    icon: icons['IconUser']
                }
            ]
        },
        {
            id: 'History',
            title: <FormattedMessage id="History" />,
            type: 'group',
            children: [
                {
                    id: 'createhistory',
                    title: <FormattedMessage id="Create History" />,
                    type: 'item',
                    url: '/admin/CreateHistory',
                    icon: icons['IconUser']
                },
                {
                    id: 'viewAllHistory',
                    title: <FormattedMessage id="View History" />,
                    type: 'item',
                    url: '/admin/ViewHistory',
                    icon: icons['IconUser']
                }
            ]
        },
        {
            id: 'reports',
            title: <FormattedMessage id="Reports" />,
            type: 'group',
            children: [
                {
                    id: 'viewrefereereport',
                    title: <FormattedMessage id="View referee reports" />,
                    type: 'item',
                    url: '/admin/ViewRefereeReport',
                    icon: icons['IconUser']
                }
            ]
        }
    ]
};

export default menuItems;
