import React,{useState} from "react"
import Form from "./Form"
import List from "./List"
import shortid from "shortid"


const App=()=>{
  const [todos,setTodos]=useState([])
  const addTodo = content=>{
    setTodos([
      ...todos,
      {
        content:content,
        id:shortid.generate()
      }
    ])
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return(
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo}/>
      <List todos={todos}/>
    </>
  )
}
export default App


// メモ
// <React.Fragment></React.Fragment>は<div></div>の書かないバージョンで
// <></>と省略できる


// ライブラリとは
// 予め、使われそうなプログラムを先に組んでおいてくれたファイルの塊

// フレームワークとは
// システム開発を楽に行えるように用意された、プログラムの雛形
// 凡庸性な昨日が予め用意されている
// 複数人で開発するときにレベルを合わせやすい
// オリジナリティの高い処理を行おうとすると余計に大変


// ユーザーインターフェイスとは
// 人と物の接点のこと
// 大きく分けて２種類あり
// ターミナルなどで行うコマンドライン入力によって操作を行うのが
// キャラクターユーザーインターフェイス(CUI)
// アイコンや画像をマウスなどのポインティングデバイスによって指示する
// グラフィカルユーザーインターフェイス(GUI)
// の二つがある。

// JSXとHTMLの違い
// ①JSX独自の属性がある
// key、ref、dangeroslySetInnerHTML

// ②使えない属性もある
// class 、forは、JavaScriptでも使われるため、属性として使用できない。
// 以下のように置き換えて使うこと。
// class → className
// for   → HTMLFor


