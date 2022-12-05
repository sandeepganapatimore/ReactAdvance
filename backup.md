let x=checkbox.findIndex((value,index)=>{
if(check==false && index==ind){
setCheckbox.filter(value)
}
else{
setCheckbox(prev => ([...prev, ind]))
}
})

```
<form>
        <br/>
        <label>Title</label>
        <input type='text' id='title' onChange={(e)=>handleFormData(e)}/>
        <br/>
        <br/>
        <label>Description</label>
        <input type='text' id='description' onChange={(e)=>handleFormData(e)}/>
        <br/>
        <br/>
        <label>Author</label>
        <input type='text' id='author' onChange={(e)=>handleFormData(e)}/>
        <button onClick={handleSubmit} >Add</button>

      </form>
```

```
const handleSubmit=(e)=>{
  e.preventDefault()
  setData(prevData => ([...prevData, form]))
}
```

const handleFormData = (event) => {
const { id } = event.target
console.log(id)
event.persist();
setForm((form) => ({
...form,
id,

    }));

};

```
  const val = useCallback(() => {
      const iterate = item.filter((item) => item.Title.toLowerCase().includes(search.toLowerCase()))
      return iterate
  }, [item, search])

    {val().map((item, ind) => {
              return (
                  <dd key={ind} >
                      <dl>Title</dl>
                      <dl>{item?.Title}</dl>
                      <dl>Author</dl>
                      <dl>{item?.Author}</dl>
                      <dl>Description</dl>
                      <dl>{item?.Description}</dl>
                      <button onClick={() => handleList1(item)}>Move</button>
                  </dd>
              )
          })}

```

for useMemo value return

const iterate = item.filter((item) => item.Title.toLowerCase().includes(search)).map((item, ind) => {
return (

<dd key={ind} >
<dl>Title</dl>
<dl>{item?.Title}</dl>
<dl>Author</dl>
<dl>{item?.Author}</dl>
<dl>Description</dl>
<dl>{item?.Description}</dl>
<button onClick={() => handleList1(item)}>Move</button>
</dd>
)
})

```


```

### COde of useMemo

    const iterate = useMemo(() => item.filter((item) => item.Title.toLowerCase().includes(search)).map((item, ind) => {
        return (
            <dd key={ind} >
                <dl>Title</dl>
                <dl>{item?.Title}</dl>
                <dl>Author</dl>
                <dl>{item?.Author}</dl>
                <dl>Description</dl>
                <dl>{item?.Description}</dl>
                <button onClick={() => handleList1(item)}>Move</button>
            </dd>
        )
    }), [item, search])

```

```
