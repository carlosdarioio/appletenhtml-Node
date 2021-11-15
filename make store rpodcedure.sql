CREATE PROCEDURE InsertOrders       
       @Title                   NVARCHAR(50)      = NULL   , 
       @Quantity                       int  = NULL   , 
       @Message                 NVARCHAR(50)  = NULL,
	   @City                 NVARCHAR(50)  = NULL  
AS 
BEGIN 
     SET NOCOUNT ON 

     INSERT INTO dbo.Orders
          (                    
            Title                     ,
            Quantity                  ,
            Message                      ,
            City
          ) 
     VALUES 
          ( 
            @Title                     ,
            @Quantity                  ,
            @Message                      ,
            @City
          ) 

END 

GO
