# React Hooks

## React Hooks란?

React Hooks는 함수형 컴포넌트에서 상태(state)와 생명주기 메서드를 사용할 수 있게 해주는 기능입니다. 
React 16.8에서 도입되었으며, 클래스 컴포넌트 없이도 React의 모든 기능을 사용할 수 있게 해줍니다.

참고: https://react.dev/reference/react/hooks

### Hooks의 장점
- **코드 재사용성**: 로직을 컴포넌트에서 분리하여 재사용 가능
- **가독성**: 관련 로직을 한 곳에 모아서 관리
- **테스트 용이성**: 훅을 독립적으로 테스트 가능
- **성능 최적화**: 불필요한 리렌더링 방지

## 기본 Hooks

### 1. useState
컴포넌트의 상태를 관리하는 가장 기본적인 훅입니다.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  );
}
```

### 2. useEffect
컴포넌트의 생명주기와 관련된 작업을 수행하는 훅입니다.

```jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행
    fetchUser(userId).then(userData => {
      setUser(userData);
      setLoading(false);
    });

    // 클린업 함수 (컴포넌트가 언마운트될 때 실행)
    return () => {
      console.log('컴포넌트가 언마운트됩니다.');
    };
  }, [userId]); // userId가 변경될 때만 실행

  if (loading) return <div>로딩 중...</div>;
  return <div>{user?.name}</div>;
}
```

## 추가 Hooks

### 3. useContext
Context를 통해 전역 상태를 쉽게 사용할 수 있게 해주는 훅입니다.

```jsx
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button 
      style={{ 
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      테마 변경
    </button>
  );
}
```

### 4. useReducer
복잡한 상태 로직을 관리할 때 사용하는 훅입니다.

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>카운트: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>리셋</button>
    </div>
  );
}
```

### 5. useMemo
값을 메모이제이션하여 성능을 최적화하는 훅입니다.

```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ items }) {
  const [filter, setFilter] = useState('');

  // items나 filter가 변경될 때만 계산
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  return (
    <div>
      <input 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="검색..."
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### 6. useCallback
함수를 메모이제이션하여 성능을 최적화하는 훅입니다.

```jsx
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // count가 변경될 때만 함수가 재생성됨
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      <ChildComponent onClick={handleClick} count={count} />
    </div>
  );
}

const ChildComponent = React.memo(({ onClick, count }) => {
  console.log('ChildComponent 렌더링');
  return <button onClick={onClick}>클릭: {count}</button>;
});
```

## 커스텀 Hooks

커스텀 훅은 로직을 재사용하기 위해 만드는 함수입니다. `use`로 시작하는 함수를 만들어 사용합니다.

### 예제 1: useLocalStorage

```jsx
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // localStorage에서 값을 가져오거나 초기값 사용
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // localStorage에 값 저장
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// 사용 예제
function App() {
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <input 
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="이름을 입력하세요"
    />
  );
}
```

### 예제 2: useFetch

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('네트워크 응답이 올바르지 않습니다');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// 사용 예제
function UserList() {
  const { data: users, loading, error } = useFetch('/api/users');

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error.message}</div>;

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Hooks 사용 규칙

React Hooks를 사용할 때 반드시 지켜야 하는 규칙들이 있습니다

참고: https://react.dev/reference/eslint-plugin-react-hooks/lints/rules-of-hooks

### 1. 최상위 레벨에서만 호출
- 반복문, 조건문, 중첩된 함수 내에서 훅을 호출하면 안 됩니다.
- 항상 React 함수의 최상위 레벨에서 호출해야 합니다.

```jsx
// ❌ 잘못된 사용법
function BadComponent() {
  if (condition) {
    const [state, setState] = useState(0); // 조건문 안에서 호출
  }
  
  for (let i = 0; i < 10; i++) {
    useEffect(() => {}); // 반복문 안에서 호출
  }
}

// ✅ 올바른 사용법
function GoodComponent() {
  const [state, setState] = useState(0); // 최상위 레벨에서 호출
  
  useEffect(() => {
    // 조건부 로직은 훅 내부에서 처리
    if (condition) {
      // 로직 처리
    }
  }, [condition]);
}
```

### 2. React 함수에서만 호출
- 일반 JavaScript 함수에서 훅을 호출하면 안 됩니다.
- React 함수 컴포넌트나 커스텀 훅에서만 호출해야 합니다.

## 실습 예제

### Todo 앱 만들기

```jsx
import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // localStorage에서 todos 불러오기
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // todos가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo 앱</h1>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

## 마무리

React Hooks는 함수형 컴포넌트에서 상태와 생명주기를 관리할 수 있게 해주는 강력한 기능입니다. 기본 훅들을 잘 이해하고, 필요에 따라 커스텀 훅을 만들어 로직을 재사용하면 더 깔끔하고 유지보수하기 좋은 코드를 작성할 수 있습니다.

### 추가 학습 자료
- [React 공식 문서 - Hooks](https://reactjs.org/docs/hooks-intro.html)
- [useHooks - 커스텀 훅 모음](https://usehooks.com/)

---

*이 문서는 React Hooks의 기본 개념과 사용법을 다룹니다. 더 자세한 내용은 공식 문서를 참고하세요.*
