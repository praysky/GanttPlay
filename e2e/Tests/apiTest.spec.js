const { test, expect } = require('@playwright/test');
const { request } = require('@playwright/test');
import { faker } from '@faker-js/faker';

let ApiPage = require('../Pages/apiPage');
let apiPage = new ApiPage()
var taskId;

test('Create a task (post/tasks)',async () => {
    let context = await request.newContext({
      baseURL: apiPage.urlApiProd,
    });
    let postTaskRequest = await context.post('./tasks', {
      headers: {
        'x-api-key': `f19d40fa86ac458e9527fd733d94370b`,
      },
      data: {
        "projectId": 1601979445391,
        "name": "234"
      }
    })
    let taskObject = await postTaskRequest.json()
    expect(taskObject.item.name).toBe("234")
    expect(postTaskRequest.ok()).toBeTruthy();
})

test('Create a task', async ({request}) =>{
const req = await request.post('./tasks', {
  data: {
    'projectId': 1601979445391,
    'name': "xxx"
  }
})
apiPage.task = await req.json()
//taskId = taskObject2.item.id
expect(apiPage.task.item.name).toBe("xxx")
expect(req.ok()).toBeTruthy()
})

// test('Get a task', async ({request}) =>{
//   console.log(apiPage.task)
//   const task = await apiPage.getTaskById(request, )
//   //let taskObject2 = await task.json()
//   console.log(task)
//   expect(task.item.id).toBe(apiPage.task.item.id)
//   //expect(req.ok()).toBeTruthy()
//   })
  

