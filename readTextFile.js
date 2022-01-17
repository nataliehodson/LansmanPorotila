        function readTextFile(){
            var text = new XMLHttpRequest();
            text.open("GET", "itemList.txt", false);
            text.onreadystatechange = function ()
            {
                if(text.readyState === 4)
                {
                    if(text.status === 200 || text.status == 0)
                    {
                        
                        var allText = text.responseText;
                        let split_text = allText.split('\n');

                        let names = [];
                        let prices = [];
                        let text_length = split_text.length
                        for (let i = 0; i < text_length; i+=2){
                            names.push(split_text[i]);
                        }; //Adds the lines with names to list
                        for (let x = 1; x < text_length+1; x+=2){
                            prices.push(split_text[x]);
                        }; //Adds the lines with prices to list
                        
                        for (let i = 0; i < names.length; i++){
                            let div = document.createElement('div');
                            div.style.display = 'flex';
                            div.style.height = '100px';
                            div.style.width = '15%';
                            div.style.borderColor = '#E1E1E1';
                            div.style.borderWidth = '1px';
                            div.style.borderStyle = 'solid';
                            div.style.borderRadius = '8px';
                            div.style.margin = '19px';
                            div.style.justifyContent = 'center';
                            div.style.alignItems = 'center';
                            div.style.flexDirection = 'column';
                            div.style.minWidth = '189px'
                            let name = document.createElement('p');
                            let price = document.createElement('p');
                            name.innerHTML = names[i];
                            price.innerHTML = prices[i];
                            document.getElementById('products').appendChild(div);
                            name.style.marginLeft = '5px';
                            name.style.marginRight = '5px';
                            div.appendChild(name);
                            div.appendChild(price);
                            div.classList.add('product');
                        };
                    }
                    
                };
            }
            text.send(null);

        };
