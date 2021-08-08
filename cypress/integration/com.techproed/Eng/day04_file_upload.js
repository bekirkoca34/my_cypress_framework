describe('File Upload',()=>{
    it('single file upload',()=>{
       cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
       
       // path of image1
       const path1='cypress\fixtures\image1.jpg'

       cy.get('#filesToUpload')
       .attachFile('path1')
       
    })
    it.only('multiple file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        // path of all images
        const path1="cypress\fixtures\image1.jpg"
       // const path2='cypress\fixtures\image2.jpg'
       // const path3='cypress\fixtures\image3.jpg'

/*
        cy.get('#filesToUpload')
        .attachFile('path1')
        .attachFile('path2')
        .attachFile('path3')

        //Assertion 
  */      
        
     })

     it.only('multiple file upload',()=>{
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      
      // path of all images
      const path1="cypress\fixtures\image1.jpg"
      
     

      // overriding oroginal file name : 
      //.attachFile({ filePath: 'FILE PATH', fileName: 'FILE NAME' })
      cy.get('#filesToUpload')
      .attachFile({ filePath: 'path1', fileName: 'customFileName.json' });
      //Assertion 
   
      
   })

})