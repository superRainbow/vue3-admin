import TodoList from '@/views/Todo/list.vue';
import CaseHandleList from '@/views/CaseHandle';
import CaseReport from '@/views/CaseReport';

export default [
  {
    path: '/case-handle',
    redirect: '/case-handle/list',
  },
  {
    path: '/case-handle/list',
    name: 'case-handle-list',
    component: CaseHandleList,
  },
  {
    path: '/case-handle/:id',
    name: 'case-handle',
    component: TodoList,
    children: [
      {
        path: '/reply-way',
        name: 'reply-way',
        component: TodoList,
      },
      {
        path: '/enterprise',
        name: 'enterprise',
        component: TodoList,
      },
      {
        path: '/investors',
        name: 'investors',
        component: TodoList,
      },
      {
        path: '/agents',
        name: 'agents',
        component: TodoList,
      },
      {
        path: '/cause',
        name: 'cause',
        component: TodoList,
      },
      {
        path: '/review',
        name: 'review',
        component: TodoList,
      },
      {
        path: '/letter',
        name: 'letter',
        component: TodoList,
      },
    ],
  },
  {
    path: '/case-fix',
    name: 'case-fix',
    component: TodoList,
  },
  {
    path: '/case-online',
    name: 'case-online',
    component: TodoList,
  },
  {
    path: 'report/report-cases',
    name: 'report-cases',
    component: CaseReport,
  },
];
