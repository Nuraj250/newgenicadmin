export class Category {
  mainCategoryId: 1;
  mainCategoryName: 'Electro';
  mainCategoryDescription: 'All mobile devices & accessories';
  mainSubCategoryList: [
    {
      mainSubCategoryId: 112,
      mainSubCategoryName: 'Mobile',
      mainSubCategoryDescription: 'All kind of category',
      subCategoryList: [
        {
          subCategoryId: 100,
          subCategoryName: 'Battery',
          subCategoryDescription: 'Battery types'
        }
      ]
    }
  ];
}

