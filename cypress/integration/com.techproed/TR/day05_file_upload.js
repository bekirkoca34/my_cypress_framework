describe('file upload', () => {
    it('single file upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

      //  cy.get('#filesToUpload').attachFile('image01.jpeg')
      //  cy.get('#filesToUpload').attachFile('image02.jpeg')

        // veya degiskene atayarak da yukleme yapabiliriz
        const path1='image01.jpeg'
        cy.get('#filesToUpload').attachFile(path1)

        cy.get('#fileList > li').should('have.text','image01.jpeg')



    })
    it('multiple file upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const path1='image01.jpeg'
        const path2='image02.jpeg'
        const path3='image03.jpeg'

        cy.get('#filesToUpload')
        .attachFile(path1).wait(2000)
        .attachFile(path2).wait(2000)
        .attachFile(path3).wait(2000)

        
    })

    it('multiple file upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')


      // 1. way
    //   cy.get('#filesToUpload')
    //    .attachFile(['image01.jpeg','image02.jpeg','image03.jpeg'])

    
// 2. way
        
        const path1='image01.jpeg'
        const path2='image02.jpeg'
        const path3='image03.jpeg'

        cy.get('#filesToUpload')
        .attachFile([path1, path2,path3])
        

        
    })

    it.only('multiple file upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const path1='image01.jpeg'
       
        cy.get('#filesToUpload')
        // dosyanin ismini degistirerek yuklememizi saglar
        .attachFile({filePath: path1, fileName:'deneme.jpeg'})
        .should('be.visible','deneme.jpeg')
        
    })

})